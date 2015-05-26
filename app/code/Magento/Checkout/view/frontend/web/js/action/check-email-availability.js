/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
/*jshint browser:true*/
/*global define*/
define(
    [
        'mage/storage',
        '../model/url-builder'
    ],
    function(storage, urlBuilder) {
        "use strict";
        return function(deferred, email) {
            return storage.post(
                urlBuilder.createUrl('/customers/isEmailAvailable', {}),
                JSON.stringify({customerEmail: email})
            ).done(
                function (isEmailAvailable) {
                    if (isEmailAvailable) {
                        deferred.resolve();
                    } else {
                        deferred.reject();
                    }
                }
            ).fail(
                function () {
                    deferred.reject();
                }
            );
        };
    }
);
