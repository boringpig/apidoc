/**
 * @api {post} http://10.0.0.110/api/areagroup kiosk地區群組
 * @apiVersion 0.0.0
 * @apiName areagroup
 * @apiGroup Kiosk
 *
 * @apiHeader {String=application/json}     Accept         指定接收格式為Json，只允許此Accept
 * @apiHeader {String="Bearer token"}      Authorization   系統發行的Token
 *
 * @apiParam {Numeric} s_city        地區
 * 
 * @apiSuccess {Boolean}        RetCode                               狀態碼
 * @apiSuccess {Object}         RetVal                                回傳陣列
 * @apiSuccess {String}         RetVal.parent_area                    地區
 * @apiSuccess {Array}          RetVal.child_area                     群組
 *
 * @apiSuccessExample Success-Response:
 *     {
 *         "RetCode": 1,
 *         "RetVal": [
 *             {
 *                 "parent_area": "0101",
 *                 "child_area": ["0101","0102","0103","0104"],
 *             }
 *          ]
 *     }
 */
