var config = {};
config.rootUrl = process.env.ROOT_URL

config.facebook = {
	appId: 			process.env.FACEBOOK_APPID			|| '1392579854355462'
	appSecret: 		process.env.FACEBOOK_APPSECRET		|| '49d6f52555426eb22ab686e3ccb1037f'
	appNamespace:   process.env.FACEBOOK_APPNAME		|| 'rhofish'
	redirectUri:    process.env.FACEBOOK_REDIRECTURI	|| 'config.rootUrl' + 'login/callback'
};
module.exports = config;