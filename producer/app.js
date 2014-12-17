'use strict';

var request = require('request');
var arrandom = require('arrandom');

var data = [
	{
		"course_id": 102,
		"badge_id": "http://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
	},
	{
		"course_id": 104,
		"badge_id": "http://www.gravatar.com/avatar/94d093eda664addd6e450d7e9881bcad?s=32&d=identicon&r=PG"
	},
	{
		"course_id": 111,
		"badge_id": "http://www.gravatar.com/avatar/94d093eda664addd6e450d7e9881bcad?s=32&d=identicon&r=PG"
	},
	{
		"course_id": 112,
		"badge_id": "http://www.gravatar.com/avatar/94d093eda664addd6e450d7e9881bcad?s=32&d=identicon&r=PG"
	},
	{
		"course_id": 105,
		"badge_id": "http://www.gravatar.com/avatar/94d093eda664addd6e450d7e9881bcad?s=32&d=identicon&r=PG"
	},
	{
		"course_id": 97,
		"badge_id": "http://www.gravatar.com/avatar/94d093eda664addd6e450d7e9881bcad?s=32&d=identicon&r=PG"
	},
	{
		"course_id": 98,
		"badge_id": "http://www.gravatar.com/avatar/94d093eda664addd6e450d7e9881bcad?s=32&d=identicon&r=PG"
	},
	{
		"course_id": 101,
		"badge_id": "http://www.gravatar.com/avatar/94d093eda664addd6e450d7e9881bcad?s=32&d=identicon&r=PG"
	},
	{
		"course_id": 28,
		"badge_id": "http://www.gravatar.com/avatar/94d093eda664addd6e450d7e9881bcad?s=32&d=identicon&r=PG"
	},
	{
		"course_id": 22,
		"badge_id": "http://www.gravatar.com/avatar/94d093eda664addd6e450d7e9881bcad?s=32&d=identicon&r=PG"
	},
	{
		"course_id": 108,
		"badge_id": "http://www.gravatar.com/avatar/94d093eda664addd6e450d7e9881bcad?s=32&d=identicon&r=PG"
	}
];

var requestObj = {
	json: data,
	method: 'POST',
	url: 'http://localhost:8000'
};

(function _request () {
	requestObj.json = [arrandom(data)[0]];
	request(requestObj, function(err){
		if (err) console.log(err);
		setTimeout(_request, 1900);
	});
})();
