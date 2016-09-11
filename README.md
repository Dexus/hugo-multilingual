# Steps

As mentioned, the translations don't seem to be inserted in the layout once they have been added. Instead of the translation the id, e.g. `[i18n] translation`, is shown in all translations.

1. Clone this repo `https://github.com/digitalcraftsman/hugo-multilingual.git`
2. Start latest version of Hugo and open the browser. Open one of the sample posts, e.g. Bar
3. Below the header you can find the word "Translations". This should be translated.
4. Open [`hugo-multilingual/themes/hugo-scriptor-theme/layouts/partials/post/header.html`](https://github.com/digitalcraftsman/hugo-multilingual/blob/master/themes/hugo-scriptor-theme/layouts/partials/post/header.html#L32-L33) in an editor
5. Replace "Translations" with `{{ i18n "translations" }}`
6. Now the website should show the id `[i18n] translations` because the translations aren't available
7. Uncomment the translations with the id `translations` in [`hugo-multilingual/themes/hugo-scriptor-theme/i18n/de.yaml`](https://github.com/digitalcraftsman/hugo-multilingual/blob/master/themes/hugo-scriptor-theme/i18n/de.yaml#L23-L24) and [`hugo-multilingual/themes/hugo-scriptor-theme/i18n/en.yaml`](https://github.com/digitalcraftsman/hugo-multilingual/blob/master/themes/hugo-scriptor-theme/i18n/en.yaml#L23-L24)
8. Switch back to the post in the browser. The id `[i18n] translations` should still be visible. The list of translations right next to it allows you to switch between German and English. Both versions should show the id.
9. Restart the server. Now the actual translations in German ("Übersetzung") and English ("Translations") should be visible.
