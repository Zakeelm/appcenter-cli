/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the UpdateResignStatusRequest class.
 * @constructor
 * Updates the status of the resign request
 *
 * @member {string} status The updated status for the resigning request.
 * 
 * @member {string} [errorCode] Error code if an error occured in the
 * resigning operation.
 * 
 * @member {string} [errorMessage] Error message if an error occured in the
 * resigning operation.
 * 
 */
function UpdateResignStatusRequest() {
}

/**
 * Defines the metadata of UpdateResignStatusRequest
 *
 * @returns {object} metadata of UpdateResignStatusRequest
 *
 */
UpdateResignStatusRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'UpdateResignStatusRequest',
    type: {
      name: 'Composite',
      className: 'UpdateResignStatusRequest',
      modelProperties: {
        status: {
          required: true,
          serializedName: 'status',
          type: {
            name: 'String'
          }
        },
        errorCode: {
          required: false,
          serializedName: 'error_code',
          type: {
            name: 'String'
          }
        },
        errorMessage: {
          required: false,
          serializedName: 'error_message',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = UpdateResignStatusRequest;
