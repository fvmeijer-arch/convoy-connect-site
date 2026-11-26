import os, sys
OUT = sys.argv[1]
DATE = '4 november 2026'
DRAFT = ('<p class="legal__draft"><strong>Concept.</strong> Deze tekst is een eerste opzet en wordt nog '
         'gecontroleerd voordat de stichting officieel van start gaat.</p>')

def page(slug, title, desc, body):
    links = [('disclaimer.html', 'Disclaimer'), ('cookiebeleid.html', 'Cookiebeleid'), ('privacyverklaring.html', 'Privacyverklaring')]
    cur = ' aria-current="page"'
    legal = '\n'.join(
        f'        <li><a href="{h}"{cur if h == slug else ""}>{t}</a></li>' for h, t in links)
    return f'''<!doctype html>
<html lang="nl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{title} | Convoy Connect</title>
  <meta name="description" content="{desc}">
  <link rel="icon" type="image/svg+xml" href="logo/favicon.svg?v=2">
  <link rel="icon" type="image/png" href="logo/favicon.png?v=2">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,300..900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css?v=8">
</head>
<body>
  <a class="skip-link" href="#main">Naar de inhoud</a>
  <header class="site-header legal-header">
    <div class="container site-header__inner">
      <a href="index.html" class="brand" aria-label="Convoy Connect, naar de homepage">
        <img src="logo/logo.svg" alt="Convoy Connect" width="1326" height="224">
      </a>
      <a href="index.html" class="legal-back">Naar de homepage</a>
    </div>
  </header>

  <main id="main" class="legal">
    <div class="container">
      <h1>{title}</h1>
      <p class="legal__meta">Laatst bijgewerkt: {DATE}</p>
      {DRAFT}
{body}
    </div>
  </main>

  <footer class="site-footer">
    <div class="container site-footer__bottom">
      <p>&copy; 2026 Stichting Convoy Connect</p>
      <ul class="site-footer__legal">
{legal}
      </ul>
    </div>
  </footer>
</body>
</html>
'''

CONTACT = ('Stichting Convoy Connect (in oprichting), Rotterdam. E-mail: '
           '<a href="mailto:info@convoyconnect.nl">info@convoyconnect.nl</a>, telefoon: '
           '<a href="tel:+31624546910">+31 6 24546910</a>.')

disclaimer = f'''
      <h2>Over deze website</h2>
      <p>Deze website is van Stichting Convoy Connect (in oprichting). We stellen de informatie op deze website met zorg samen, maar we kunnen niet garanderen dat alles altijd volledig, juist en actueel is. Aan de inhoud kun je geen rechten ontlenen.</p>

      <h2>Geen advies</h2>
      <p>De informatie op deze website is algemeen. Het is geen juridisch, fiscaal of logistiek advies. Ook informatie over sancties, exportregels en dual-use goederen is alleen bedoeld als achtergrond. Neem voor je eigen situatie contact op met de bevoegde instanties of een adviseur.</p>

      <h2>Organisaties en cijfers van anderen</h2>
      <p>Op deze website noemen we organisaties waarmee we willen samenwerken of waarvan we het werkmodel als voorbeeld gebruiken. Dat betekent niet dat er een formele samenwerking is, tenzij we dat er uitdrukkelijk bij vermelden. Cijfers over andere organisaties komen uit hun eigen openbare publicaties.</p>

      <h2>Links naar andere websites</h2>
      <p>Deze website kan links bevatten naar websites van anderen. Wij zijn niet verantwoordelijk voor de inhoud of het privacybeleid van die websites.</p>

      <h2>Aansprakelijkheid</h2>
      <p>Stichting Convoy Connect is niet aansprakelijk voor schade die ontstaat door het gebruik van deze website of doordat de website tijdelijk niet bereikbaar is, behalve bij opzet of grove nalatigheid.</p>

      <h2>Auteursrecht</h2>
      <p>Teksten, het logo en de vormgeving van deze website zijn van Stichting Convoy Connect. Wil je iets overnemen? Vraag het ons gerust. Beeldmateriaal van anderen gebruiken we volgens de licentie van de maker.</p>

      <h2>Contact</h2>
      <p>{CONTACT}</p>'''

cookies = f'''
      <h2>Kort gezegd</h2>
      <p>Deze website plaatst geen cookies. We gebruiken geen analyse-, advertentie- of trackingcookies en volgen je niet over andere websites. Daarom vragen we je ook niet om toestemming via een cookiebanner.</p>

      <h2>Wat we wel in je browser bewaren</h2>
      <p>Als je kiest tussen Nederlands en Engels, onthoudt je browser die keuze, zodat de website de volgende keer in dezelfde taal opent. Die keuze staat alleen op je eigen apparaat (in de lokale opslag van je browser), wordt niet naar ons verstuurd en bevat geen persoonsgegevens. Je kunt hem op elk moment wissen via de instellingen van je browser.</p>

      <h2>Lettertypen van Google</h2>
      <p>Voor de letters op deze website gebruiken we Google Fonts. Je browser haalt het lettertype op bij de servers van Google. Daarbij ziet Google je IP-adres, zoals bij elk bezoek aan een website. Google Fonts plaatst daarbij geen cookies. Meer hierover lees je in het <a href="https://policies.google.com/privacy" rel="noopener">privacybeleid van Google</a>.</p>

      <h2>Wijzigingen</h2>
      <p>Gaan we in de toekomst wel cookies gebruiken, bijvoorbeeld om bezoekersaantallen te meten, dan passen we dit cookiebeleid aan en vragen we waar nodig eerst je toestemming.</p>

      <h2>Vragen</h2>
      <p>{CONTACT}</p>'''

privacy = f'''
      <h2>Wie zijn wij</h2>
      <p>{CONTACT} Wij zijn verantwoordelijk voor de verwerking van de persoonsgegevens die in deze privacyverklaring staan.</p>

      <h2>Welke gegevens we verwerken</h2>
      <p>We verwerken alleen gegevens die je zelf aan ons geeft, bijvoorbeeld als je ons mailt of belt:</p>
      <ul>
        <li>je naam;</li>
        <li>de naam van je organisatie, als je die noemt;</li>
        <li>je e-mailadres en eventueel je telefoonnummer;</li>
        <li>wat je ons in je bericht vertelt, zoals welke apparatuur of vrachtruimte je aanbiedt.</li>
      </ul>
      <p>Het contactformulier op deze website verstuurt zelf niets. Het opent je eigen e-mailprogramma met een kant-en-klaar bericht. Pas als je dat bericht verstuurt, ontvangen wij je gegevens per e-mail.</p>

      <h2>Waarvoor we je gegevens gebruiken</h2>
      <ul>
        <li>om je vraag of aanbod te beantwoorden;</li>
        <li>om een zending te organiseren als je apparatuur, vrachtruimte of een donatie aanbiedt;</li>
        <li>om onze administratie en verantwoording aan donateurs bij te houden, als je een gift of sponsoring doet.</li>
      </ul>
      <p>We doen dit omdat je zelf contact met ons opneemt en we je verzoek willen afhandelen (gerechtvaardigd belang), of omdat het nodig is voor een afspraak met jou. Voor de administratie van giften kan een wettelijke bewaarplicht gelden.</p>

      <h2>Met wie we gegevens delen</h2>
      <p>We verkopen je gegevens nooit. We delen ze alleen als dat nodig is om een zending te regelen, bijvoorbeeld met een transportpartner of een erkende hulporganisatie, en dan alleen de gegevens die daarvoor nodig zijn. Dat bespreken we eerst met je.</p>

      <h2>Hoe lang we gegevens bewaren</h2>
      <p>We bewaren je gegevens niet langer dan nodig. Berichten en contactgegevens verwijderen we uiterlijk twee jaar na ons laatste contact, tenzij we ze langer moeten bewaren voor de wet, zoals gegevens over giften voor de fiscale bewaarplicht van zeven jaar.</p>

      <h2>Je rechten</h2>
      <p>Je mag ons altijd vragen welke gegevens we van je hebben. Je kunt ook vragen om ze te verbeteren of te verwijderen, of bezwaar maken tegen het gebruik ervan. Stuur daarvoor een e-mail naar <a href="mailto:info@convoyconnect.nl">info@convoyconnect.nl</a>. We reageren binnen vier weken.</p>
      <p>Ben je het niet eens met hoe we met je gegevens omgaan? Dan kun je een klacht indienen bij de <a href="https://autoriteitpersoonsgegevens.nl" rel="noopener">Autoriteit Persoonsgegevens</a>.</p>

      <h2>Beveiliging</h2>
      <p>We nemen passende maatregelen om je gegevens te beschermen, zoals beveiligde e-mail en accounts met sterke wachtwoorden. Alleen bestuursleden die je verzoek afhandelen, hebben toegang tot je gegevens.</p>

      <h2>Bezoek aan deze website</h2>
      <p>Deze website gebruikt geen cookies en geen analysediensten. Lees meer in ons <a href="cookiebeleid.html">cookiebeleid</a>.</p>'''

pages = {
  'disclaimer.html': ('Disclaimer', 'Disclaimer van Stichting Convoy Connect.', disclaimer),
  'cookiebeleid.html': ('Cookiebeleid', 'Cookiebeleid van Stichting Convoy Connect: deze website plaatst geen cookies.', cookies),
  'privacyverklaring.html': ('Privacyverklaring', 'Privacyverklaring van Stichting Convoy Connect.', privacy),
}
for slug, (t, d, b) in pages.items():
    open(os.path.join(OUT, slug), 'w').write(page(slug, t, d, b))
print('written', list(pages))
