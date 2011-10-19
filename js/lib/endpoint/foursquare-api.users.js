/*
The MIT License

Copyright (c) 2011 M.F.A. ten Veldhuis

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

FourSquareClient.prototype.getUsersClient = function()
{
	var client = this;
	return {
		/**
		 * 	@constant
		 */
		USERS_URL: "https://api.foursquare.com/v2/users/{user_id}",	
		/**
		 * 	@constant
		 */
		SEARCH_URL: "https://api.foursquare.com/v2/users/search",
		/**
		 * 	@constant
		 */
		REQUESTS_URL: "https://api.foursquare.com/v2/users/requests",	
		/**
		 * 	@constant
		 */
		BADGES_URL: "https://api.foursquare.com/v2/users/{user_id}/badges",
		/**
		 * 	@constant
		 */
		CHECKINS_URL: "https://api.foursquare.com/v2/users/{user_id}/checkins",
		/**
		 * 	@constant
		 */
		FRIENDS_URL: "https://api.foursquare.com/v2/users/{user_id}/friends",
		/**
		 * 	@constant
		 */
		TIPS_URL: "https://api.foursquare.com/v2/users/{user_id}/tips",
		/**
		 * 	@constant
		 */
		TODOS_URL: "https://api.foursquare.com/v2/users/{user_id}/todos",
		/**
		 * 	@constant
		 */
		VENUE_HISTORY_URL: "https://api.foursquare.com/v2/users/{user_id}/venuehistory",	
		/**
		 * 	@constant
		 */
		REQUEST_URL: "https://api.foursquare.com/v2/users/{user_id}/request",
		/**
		 * 	@constant
		 */
		UNFRIEND_URL: "https://api.foursquare.com/v2/users/{user_id}/unfriend",
		/**
		 * 	@constant
		 */
		APPROVE_URL: "https://api.foursquare.com/v2/users/{user_id}/approve",
		/**
		 * 	@constant
		 */
		DENY_URL: "https://api.foursquare.com/v2/users/{user_id}/deny",
		/**
		 * 	@constant
		 */
		SET_PINGS_URL: "https://api.foursquare.com/v2/users/{user_id}/setpings",
			
		users: function(requestCallback, userId)
		{
			var requestUrl = this.USERS_URL.replace("{user_id}", userId) + client.requestQuery();
		
			FourSquareUtils.doRequest(requestUrl, requestCallback);
		},	
		
		search: function(requestCallback, phone, email, twitter, twitterSource, fbid, name)
		{
			var requestUrl = this.SEARCH_URL + client.requestQuery();
			requestUrl += FourSquareUtils.createQueryString("&",
								{
									phone: phone,
									email: email,
									twitter: twitter,
									twitterSource: twitterSource,
									fbid: fbid,
									name: name
								});
			
			FourSquareUtils.doRequest(requestUrl, requestCallback);
		},
		
		requests: function(requestCallback)
		{
			var requestUrl = this.REQUESTS_URL + client.requestQuery();
			
			FourSquareUtils.doRequest(requestUrl, requestCallback);
		},
		
		badges: function(requestCallback, userId, sets, badges)
		{
			var requestUrl = this.BADGES_URL.replace("{user_id}", userId) + client.requestQuery();
			requestUrl += FourSquareUtils.createQueryString("&",
								{
									sets: sets,
									badges: badges
								});
			
			FourSquareUtils.doRequest(requestUrl, requestCallback);
		},
		
		checkins: function(requestCallback, userId, limit, offset, afterTimestamp, beforeTimestamp)
		{
			var requestUrl = this.CHECKINS_URL.replace("{user_id}", userId) + client.requestQuery();
			requestUrl += FourSquareUtils.createQueryString("&",
								{
									limit: limit,
									offset: limit,
									afterTimestamp: afterTimestamp,
									beforeTimestamp: beforeTimestamp
								});
			
			FourSquareUtils.doRequest(requestUrl, requestCallback);
		},
		
		friends: function(requestCallback, userId, limit, offset)
		{
			var requestUrl = this.FRIENDS_URL.replace("{user_id}", userId) + client.requestQuery();
			requestUrl += FourSquareUtils.createQueryString("&",
								{
									limit: limit,
									offset: offset
								});
			
			FourSquareUtils.doRequest(requestUrl, requestCallback);
		},
		
		tips: function(requestCallback, userId, sort, latitude, longitude, limit, offset)
		{
			var requestUrl = this.TIPS_URL.replace("{user_id}", userId) + client.requestQuery();			
			requestUrl += FourSquareUtils.createQueryString("&",
								{
									sort: sort,
									ll: (latitude && longitude) ? latitude + "," + longitude : null,
									limit: limit,
									offset: offset
								});
			
			FourSquareUtils.doRequest(requestUrl, requestCallback);
		},
		
		todos: function(requestCallback, userId, sort, latitude, longitude)
		{
			var requestUrl = this.TODOS_URL.replace("{user_id}", userId) + client.requestQuery();
			requestUrl += FourSquareUtils.createQueryString("&",
								{
									sort: sort,
									ll: (latitude && longitude) ? latitude + "," + longitude : null,
								});
			
			FourSquareUtils.doRequest(requestUrl, requestCallback);
		},
		
		venuehistory: function(requestCallback, userId, afterTimestamp, beforeTimestamp)
		{
			var requestUrl = this.VENUE_HISTORY_URL.replace("{user_id}", userId) + client.requestQuery();
			requestUrl += FourSquareUtils.createQueryString("&",
								{
									afterTimestamp: afterTimestamp,
									beforeTimestamp: beforeTimestamp
								});

			FourSquareUtils.doRequest(requestUrl, requestCallback);
		},	
		
		request: function(requestCallback, userId)
		{
			var requestUrl = this.REQUEST_URL.replace("{user_id}", userId) + client.requestQuery();
			
			FourSquareUtils.doRequest(requestUrl, requestCallback, "POST");
		},
		
		unfriend: function(requestCallback, userId)
		{
			var requestUrl = this.UNFRIEND_URL.replace("{user_id}", userId) + client.requestQuery();
			
			FourSquareUtils.doRequest(requestUrl, requestCallback, "POST");
		},
		
		approve: function(requestCallback, userId)
		{
			var requestUrl = this.APPROVE_URL.replace("{user_id}", userId) + client.requestQuery();
			
			FourSquareUtils.doRequest(requestUrl, requestCallback, "POST");
		},
		
		deny: function(requestCallback, userId)
		{
			var requestUrl = this.DENY_URL.replace("{user_id}", userId) + client.requestQuery();
			
			FourSquareUtils.doRequest(requestUrl, requestCallback, "POST");
		},
		
		setpings: function(requestCallback, userId, value)
		{
			var requestUrl = this.DENY_URL.replace("{user_id}", userId) + client.requestQuery();
			requestUrl += FourSquareUtils.createQueryString("&",
								{
									value: value
								});
			
			FourSquareUtils.doRequest(requestUrl, requestCallback, "POST");
		}
	};
};