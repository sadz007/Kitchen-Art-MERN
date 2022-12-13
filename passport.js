const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

passport.use(
	new GoogleStrategy(
		{
			clientID: '172330627327-iqnevipoindr7a7k84eop8qps72m7t6o.apps.googleusercontent.com',
			clientSecret: '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',
			callbackURL: "/auth/google/callback",
			scope: ["profile", "email"],
		},
		function (accessToken, refreshToken, profile, callback) {
			callback(null, profile);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});


passport.deserializeUser((user, done) => {
	done(null, user);
});
