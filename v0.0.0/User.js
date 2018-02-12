/**
 * @api {get} http://example.com/v1/me 用戶基本訊息
 * @apiVersion 1.0.0
 * @apiName me
 * @apiGroup User
 *
 * @apiHeader {String=application/json}     Accept          指定接收格式為Json，只允許此Accept
 * @apiHeader {String="Bearer :token"}      Authorization   系統發行的Token
 *
 * @apiSuccess {Boolean}        success=true        狀態碼
 * @apiSuccess {Object}         retval              回傳物件
 * @apiSuccess {String}         retval.name         用戶姓名
 * @apiSuccess {String}         retval.email        用戶信箱
 * @apiSuccess {Numeric}        retval.weight       用戶體重
 * @apiSuccess {Numeric}        retval.length       用戶身高
 * @apiSuccess {String}         retval.birthday     用戶生日
 * @apiSuccess {Number}         retval.gender       用戶性別
 * @apiSuccess {Number}         retval.data_unit    用戶數據顯示單位
 * @apiSuccess {String}         retval.address      用戶地址
 * @apiSuccess {String}         retval.picture      用戶照片
 * @apiSuccess {Number}         retval.updated_at   用戶上次更新資料時的時間戳
 *
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *       "retval": {
 *          "name": "SJZeng",
 *          "email": "sjzeng@program.com.tw",
 *          "weight": 60.5,
 *          "length": 150.7,
 *          "birthday": "1995-04-24",
 *          "gender": 1,
 *          "data_unit": 0,
 *          "address": null,
 *          "picture": "http://local.api.gev/bucket/images/profile/lCfPXgZVQpDj5sraLegO8hWrakjEwld21qExypG8.png",
 *          "updated_at": 1505113109
 *       }
 *     }
 *
 */

/**
 * @api {post} http://example.com/v1/me 更新用戶資料
 * @apiVersion 1.1.0
 * @apiName updateMyself
 * @apiGroup User
 *
 * @apiHeader {String=application/json}     Accept          指定接收格式為Json，只允許此Accept
 * @apiHeader {String="Bearer :token"}      Authorization   系統發行的Token
 * 
 * @apiParam {String=PUT}       _method         讓後端使用PUT 的方法解讀
 * @apiParam {String}           [name]          用戶姓名
 * @apiParam {Numberic}         [weight]        體重，單位：KG，example：60.5
 * @apiParam {Numeric}          [length]        身高，單位：cm，example：165.8
 * @apiParam {String}           [birthday]      用戶生日，example：1995-04-12
 * @apiParam {Number=0,1,2}     [gender]        性別，0=Unknown，1=Male，2=Female
 * @apiParam {Number=1,2}       [data_unit]     單位設定，1=公制，2=英制
 * @apiParam {String}           [address]       用戶地址
 * @apiParam {File=png,jpeg}    [picture]       用戶照片，尺寸需小於 500 x 500
 *
 * @apiSuccess {Boolean}    success=true    狀態碼
 *
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *     }
 *
 */


 /**
 * @api {post} http://example.com/v1/me 更新用戶資料
 * @apiVersion 1.0.0
 * @apiName updateMyself
 * @apiGroup User
 *
 * @apiHeader {String=application/json}     Accept          指定接收格式為Json，只允許此Accept
 * @apiHeader {String="Bearer :token"}      Authorization   系統發行的Token
 * 
 * @apiParam {String=PUT}       _method         讓後端使用PUT 的方法解讀
 * @apiParam {String}           [name]          用戶姓名
 * @apiParam {Numberic}         [weight]        體重，單位：KG，example：60.5
 * @apiParam {Numeric}          [length]        身高，單位：cm，example：165.8
 * @apiParam {String}           [birthday]      用戶生日，example：1995-04-12
 * @apiParam {Number=1,2,3}     [gender]        性別，單位：cm，1=男，2=女，3=未提供
 * @apiParam {Number=1,2}       [data_unit]     單位設定，1=公制，2=英制
 * @apiParam {String}           [address]       用戶地址
 * @apiParam {File=png,jpeg}    [picture]       用戶照片，尺寸需小於 500 x 500
 *
 * @apiSuccess {Boolean}    success=true    狀態碼
 *
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *     }
 *
 */
