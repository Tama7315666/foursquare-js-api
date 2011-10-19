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

FourSquareClient.prototype.getSettingsClient = function()
{
	var client = this;
	return {
		/**
		 * @static
		 */	
		SETTING_URL: "https://api.foursquare.com/v2/settings/{setting_id}",
		/**
		 * @static
		 */
		SET_URL: "https://api.foursquare.com/v2/settings/{setting_id}/set",
		
		// sendToTwitter, sendToFacebook, receivePings, receiveCommentPings.
		settings: function(requestCallback, settingId)
		{
			var settingParam = (settingId) ? settingId : "all";
			var requestUrl = this.SETTING_URL.replace("{setting_id}", settingId) + client.requestQuery();
			
			FourSquareUtils.doRequest(requestUrl, requestCallback);
		},
		
		set: function(requestCallback, settingId, value)
		{
			if(value.toString() == "0" || value.toString() == "1")
			{
				var settingParam = (settingId) ? settingId : "all";
				var requestUrl = this.SET_URL.replace("{setting_id}", settingId) + client.requestQuery() + "&value=" + value;
			
				FourSquareUtils.doRequest(requestUrl, requestCallback, "POST");
			}
			else
			{
				console.error("Setting has to be '0' or '1'");
			}
		}
	}
};