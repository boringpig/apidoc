/**
 * @api {post} http://10.0.0.110/api/advertisements 地區廣告資料
 * @apiVersion 0.0.0
 * @apiName advertisements
 * @apiGroup Advertisement
 *
 * @apiHeader {String=application/json}     Accept         指定接收格式為Json，只允許此Accept
 * @apiHeader {String="Bearer token"}      Authorization   系統發行的Token
 *
 * @apiParam {Numeric}  s_city      播放地區
 * 
 * @apiSuccess {Boolean}        RetCode                               狀態碼
 * @apiSuccess {Object}         RetVal                                回傳陣列
 * @apiSuccess {String}         RetVal.name                           廣告名稱
 * @apiSuccess {String}         RetVal.path                           圖片路徑
 * @apiSuccess {String}         RetVal.round_time                     循環秒數
 * @apiSuccess {Array}          RetVal.weeks                          循環星期
 * @apiSuccess {String}         RetVal.status                         啟用狀態
 * @apiSuccess {Array}          RetVal.broadcast_area                 播放地區
 * @apiSuccess {String}         RetVal.broadcast_time                 播放時段
 *
 * @apiSuccessExample Success-Response:
 *     {
 *         "RetCode": 1,
 *         "RetVal": [
 *             {
 *                 "name": "test",
 *                 "path": "http://10.0.0.110/uploads/advertisement/15173942735a719961b703f.jpg",
 *                 "round_time": 10,
 *                 "weeks": ["ㄧ","二","三","四","五","六","日"],
 *                 "status": "啟用",
 *                 "broadcast_area": ["福建省安溪县","福建省江南片区"],
 *                 "broadcast_time": "09:00~17:00",
 *             }
 *          ]
 *     }
 */
