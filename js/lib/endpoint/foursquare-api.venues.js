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

FourSquareClient.prototype.getVenuesClient = function()
{
	var client = this;
	return {
		/**
		 * @constant
		 */	
		VENUES_URL: "https://api.foursquare.com/v2/venues/{venue_id}",
		/**
		 * @constant
		 */
		ADD_URL: "https://api.foursquare.com/v2/venues/add",
		/**
		 * @constant
		 */
		CATEGORIES_URL: "https://api.foursquare.com/v2/venues/categories",
		/**
		 * @constant
		 */
		SEARCH_URL: "https://api.foursquare.com/v2/venues/search",
		/**
		 * @constant
		 */
		TRENDING_URL: "https://api.foursquare.com/v2/venues/trending",
		/**
		 * @constant
		 */
		HERENOW_URL: "https://api.foursquare.com/v2/venues/{venue_id}/herenow",
		/**
		 * @constant
		 */
		TIPS_URL: "https://api.foursquare.com/v2/venues/{venue_id}/tips",
		/**
		 * @constant
		 */
		PHOTOS_URL: "https://api.foursquare.com/v2/venues/{venue_id}/photos",
		/**
		 * @constant
		 */
		LINKS_URL: "https://api.foursquare.com/v2/venues/{venue_id}/links",
		/**
		 * @constant
		 */
		MARK_TODO_URL: "https://api.foursquare.com/v2/venues/{venue_id}/marktodo",
		/**
		 * @constant
		 */
		FLAG_URL: "https://api.foursquare.com/v2/venues/{venue_id}/flag",
		/**
		 * @constant
		 */
		PROPOSE_EDIT_URL: "https://api.foursquare.com/v2/venues/{venue_id}/proposeedit",
		
		venues: function(requestCallback, venueId)
		{
			var requestUrl = this.VENUES_URL.replace("{venue_id}", venueId) + client.requestQuery();
			
			FourSquareUtils.doRequest(requestUrl, requestCallback);
		},
		
		add: function(requestCallback, name, address, crossStreet, city, state, zip, phone, latitude, longitude, primaryCategoryId)
		{
			var requestUrl = this.ADD_URL + client.requestQuery();
			requestUrl += FourSquareUtils.createQueryString("&",
								{
									name: name,
									address: address,
									crossStreet: crossStreet,
									city: city,
									state: state,
									zip: zip,
									phone: phone, 
									ll: (latitude && longitude) ? latitude + "," + longitude : null,
									primaryCategoryId: primaryCategoryId
								});
			
			FourSquareUtils.doRequest(requestUrl, requestCallback, "POST");
		},
		
		categories: function(requestCallback)
		{
			var requestUrl = this.CATEGORIES_URL + client.requestQuery();
			
			FourSquareUtils.doRequest(requestUrl, requestCallback);
		},
		
		search: function(requestCallback, latitude, longitude, accuracy, altitude, altitudeAccuracy, query, limit, intent, categoryId, url, providerId, linkedId)
		{
			var requestUrl = this.SEARCH_URL + client.requestQuery();
			requestUrl += FourSquareUtils.createQueryString("&",
								{
									ll: (latitude && longitude) ? latitude + "," + longitude : null,
									accuracy: accuracy,
									altitude: altitude,
									altitudeAccuracy: altitudeAccuracy,
									query: query,
									limit: limit,
									intent: intent,
									categoryId: categoryId,
									url: url, 
									providerId: providerId,
									linkedId: linkedId
								});
			
			FourSquareUtils.doRequest(requestUrl, requestCallback);
		},
		
		trending: function(requestCallback, venueId, latitude, longitude, limit,  radius)
		{
			var requestUrl = this.TRENDING_URL + client.requestQuery();
			requestUrl += FourSquareUtils.createQueryString("&",
								{
									ll:  latitude + "," + longitude,
									limit: limit,
									radius: radius
								});
						
			FourSquareUtils.doRequest(requestUrl, requestCallback);
		},
		
		herenow: function(requestCallback, venueId, limit, offset, afterTimestamp)
		{
			var requestUrl = this.HERENOW_URL.replace("{venue_id}", venueId) + client.requestQuery();
			requestUrl += FourSquareUtils.createQueryString("&",
								{
									limit: limit,
									radius: radius,
									afterTimestamp: afterTimestamp
								});
			
			FourSquareUtils.doRequest(requestUrl, requestCallback);
		},

		tips: function(requestCallback, venueId, sort, limit, offset)
		{
			var requestUrl = this.TIPS_URL.replace("{venue_id}", venueId) + client.requestQuery();
			requestUrl += FourSquareUtils.createQueryString("&",
								{
									sort: sort,
									limit: limit,
									offset: offset
								});
			
			FourSquareUtils.doRequest(requestUrl, requestCallback);
		},
		
		photos: function(requestCallback, venueId, group, limit, offset)
		{
			var requestUrl = this.PHOTOS_URL.replace("{venue_id}", venueId) + client.requestQuery();
			requestUrl += FourSquareUtils.createQueryString("&",
								{
									group: group,
									limit: limit,
									offset: offset
								});
			
			FourSquareUtils.doRequest(requestUrl, requestCallback);
		},
		
		links: function(requestCallback, venueId)
		{
			var requestUrl = this.LINKS_URL.replace("{venue_id}", venueId) + client.requestQuery();
			
			FourSquareUtils.doRequest(requestUrl, requestCallback);
		},
	
		marktodo: function(requestCallback, venueId, text)
		{
			var requestUrl = this.MARK_TODO_URL.replace("{venue_id}", venueId) + client.requestQuery();
			requestUrl += FourSquareUtils.createQueryString("&",
								{
									text: text
								});
			
			FourSquareUtils.doRequest(requestUrl, requestCallback, "POST");
		},
		
		flag: function(requestCallback, venueId, problem)
		{
			var requestUrl = this.FLAG_URL.replace("{venue_id}", venueId) + client.requestQuery() + "&problem=" + problem;
			
			FourSquareUtils.doRequest(requestUrl, requestCallback, "POST");
		},
		
		proposeedit: function(requestCallback, venueId, name, address, crossStreet, city, state, zip, phone, latitude, longitude, primaryCategoryId)
		{
			var requestUrl = this.PROPOSE_EDIT_URL.replace("{venue_id}", venueId) + client.requestQuery();
			requestUrl += (name) ? "&name=" + name : "";
			requestUrl += (address) ? "&address=" + address : "";
			requestUrl += (crossStreet) ? "&crossStreet=" + crossStreet : "";
			requestUrl += (city) ? "&city=" + city : "";
			requestUrl += (state) ? "&state=" + state : "";
			requestUrl += (zip) ? "&zip=" + zip : "";
			requestUrl += (phone) ? "&phone=" + phone : "";
			requestUrl += (latitude && longitude) ? "&ll=" + latitude + "," + longitude : "";
			requestUrl += (primaryCategoryId) ? "&primaryCategoryId=" + primaryCategoryId : "";
			
			FourSquareUtils.doRequest(requestUrl, requestCallback, "POST");
		}
	}
};