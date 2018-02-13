/**
 * @api {post} http://10.0.0.110/api/setting/customer 客服聯絡資訊
 * @apiVersion 0.0.0
 * @apiName customer
 * @apiGroup Setting
 *
 * @apiHeader {String=application/json}     Accept         指定接收格式為Json，只允許此Accept
 * @apiHeader {String="Bearer token"}      Authorization   系統發行的Token
 *
 * @apiSuccess {Boolean}        RetCode                               狀態碼
 * @apiSuccess {Array}          RetVal                                回傳陣列
 * @apiSuccess {String}         RetVal.customer_service_phone         客服聯絡手機
 * @apiSuccess {String}         RetVal.customer_service_email         客服聯絡信箱
 *
 * @apiSuccessExample Success-Response:
 *     {
 *         "RetCode": 1,
 *         "RetVal": [
 *             {
 *                 "customer_service_phone": "23692699",
 *                 "customer_service_email": "microprogram@program.com.tw"
 *             }
 *          ]
 *     }
 * 
 * @apiError Request-must-be-json   Header 未加上Accept: application/json
 * @apiError Token-not-provided     授权失败，缺少token栏位
 * @apiError Invalid-Token          授权失败，无效的token
 *
 * @apiErrorExample Request-must-be-json:
 *     {
 *         "RetCode": 0,
 *         "RetMsg": "请求必须為JSON"
 *     }
 * @apiErrorExample Token-not-provided:
 *     {
 *         "RetCode": 0,
 *         "RetMsg": "授权失败，缺少token栏位"
 *     }
 * @apiErrorExample Invalid-Token:
 *     {
 *         "RetCode": 0,
 *         "RetMsg": "授权失败，无效的token"
 *     }
 * 
 */

 /**
 * @api {post} http://10.0.0.110/api/setting/kiosk kiosk閒置時間
 * @apiVersion 0.0.0
 * @apiName kiosk
 * @apiGroup Setting
 *
 * @apiHeader {String=application/json}     Accept         指定接收格式為Json，只允許此Accept
 * @apiHeader {String="Bearer token"}      Authorization   系統發行的Token
 *
 * @apiSuccess {Boolean}        RetCode                               狀態碼
 * @apiSuccess {Array}          RetVal                                回傳陣列
 * @apiSuccess {String}         RetVal.kiosk_freetime                 閒置時間
 *
 * @apiSuccessExample Success-Response:
 *     {
 *         "RetCode": 1,
 *         "RetVal": [
 *             {
 *                 "kiosk_freetime": "3",
 *             }
 *          ]
 *     }
 * 
 * @apiError Request-must-be-json   Header 未加上Accept: application/json
 * @apiError Token-not-provided     授权失败，缺少token栏位
 * @apiError Invalid-Token          授权失败，无效的token
 *
 * @apiErrorExample Request-must-be-json:
 *     {
 *         "RetCode": 0,
 *         "RetMsg": "请求必须為JSON"
 *     }
 * @apiErrorExample Token-not-provided:
 *     {
 *         "RetCode": 0,
 *         "RetMsg": "授权失败，缺少token栏位"
 *     }
 * @apiErrorExample Invalid-Token:
 *     {
 *         "RetCode": 0,
 *         "RetMsg": "授权失败，无效的token"
 *     }
 * 
 */
