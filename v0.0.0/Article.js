/**
 * @api {post} http://10.0.0.110/api/articles 地區文章資料
 * @apiVersion 0.0.0
 * @apiName articles
 * @apiGroup Article
 *
 * @apiHeader {String=application/json}     Accept         指定接收格式為Json，只允許此Accept
 * @apiHeader {String="Bearer token"}      Authorization   系統發行的Token
 *
 * @apiParam {Numeric} type          標題類型
 * @apiParam {String}  language      文章語系
 * @apiParam {Numeric} s_city        播放地區
 * 
 * @apiSuccess {Boolean}        RetCode                               狀態碼
 * @apiSuccess {Object}         RetVal                                回傳陣列
 * @apiSuccess {String}         RetVal.title                          文章標題
 * @apiSuccess {String}         RetVal.content                        文章內容
 * @apiSuccess {Array}          RetVal.broadcast_area                 播放地區
 * @apiSuccess {String}         RetVal.language                       文章語系
 *
 * @apiSuccessExample Success-Response:
 *     {
 *         "RetCode": 1,
 *         "RetVal": [
 *             {
 *                 "title": "小提醒",
 *                 "content": "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\" \"http://www.w3.org/TR/REC-html40/loose.dtd\">\n<html><body><p>Et ea suscipit sed esse qui sapiente consequuntur. Voluptas sit qui eos quibusdam. Sit consequatur et voluptates et distinctio omnis similique. Non et aut omnis et. Quaerat eos ut incidunt mollitia.</p></body></html>\n",
 *                 "broadcast_area": ["福建省安溪县","福建省江南片区"],
 *                 "language": "en",
 *             },
 *             {
 *                 "title": "小提醒",
 *                 "content": "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\" \"http://www.w3.org/TR/REC-html40/loose.dtd\">\n<html><body><p>Et ea suscipit sed esse qui sapiente consequuntur. Voluptas sit qui eos quibusdam. Sit consequatur et voluptates et distinctio omnis similique. Non et aut omnis et. Quaerat eos ut incidunt mollitia.</p></body></html>\n",
 *                 "broadcast_area": ["福建省安溪县"],
 *                 "language": "en",
 *             }
 *          ]
 *     }
 */
