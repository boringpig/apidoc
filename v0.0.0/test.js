/**
 * @api {post} http://10.0.0.110/api/areagroup 地區群組
 * 
 * @apiDescription 
 * Google Place Search 的API 串接
 * 
 * 預設需提供參數: ":q" 以及 ":location"
 * 
 * @apiVersion 0.0.0
 * @apiName areagroup
 * @apiGroup Test
 *
 * @apiHeader {String=application/json}     Accept         指定接收格式為Json，只允許此Accept
 * @apiHeader {String="Bearer token"}      Authorization   系統發行的Token
 *
 * @apiParam {Numeric=0101,0102}  [s_city]     地區，範例：0101福建省泉州市、0102福建省安徽市
 * @apiParam {String{..10}}       [number]     號碼
 * 
 * @apiSuccess {Boolean}        RetCode=1                             狀態碼
 * @apiSuccess {Array}          RetVal                                回傳陣列
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
 * 
 */
