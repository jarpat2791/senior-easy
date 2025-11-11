# 👴 Senior-Easy

**Senior-Easy** to prosta aplikacja webowa stworzona z myślą o seniorach.  
Ułatwia kontakt z rodziną, przypomina o lekach oraz pozwala korzystać z lokalnych usług i rozmów wideo.

---

## 🌟 Funkcje

### 🏠 Strona główna
- Szybki dostęp do głównych funkcji aplikacji:
  - **Rozmowy wideo** 👩‍💻  
  - **Leki i przypomnienia** 💊  
  - **Kontakty rodzinne** 👨‍👩‍👧  
  - **Usługi lokalne** 📍  

---

### 💊 Zarządzanie lekami
- Dodawanie, usuwanie i oznaczanie leków jako przyjęte.
- Ustalanie godzin przypomnień.
- Powiadomienia o przyjęciu leku.
- Dane są zapisywane w `localStorage`, dzięki czemu nie giną po odświeżeniu strony.

---

### 👨‍👩‍👧 Kontakty rodzinne
- Dodawanie nowych kontaktów z imieniem, numerem telefonu i emoji-awatarem.  
- Edycja i usuwanie kontaktów.
- Bezpośrednie **połączenia telefoniczne** (alert symulujący połączenie).  
- **Połączenia wideo przez WebRTC** — rzeczywiste łączenie dwóch przeglądarek w sieci lokalnej (lub przez STUN server).  
- Wszystkie kontakty są zapisywane w `localStorage`.

---

### 📍 Lokalne usługi
- Lista przydatnych usług: transport medyczny, apteka, pomoc domowa itp.  
- Możliwość dodania i edycji własnych usług.
- Dane usług są również zapisywane w `localStorage`.

---

### ⚙️ Ustawienia
- Przełącznik **Trybu Opieki Rodzinnej** — powiadamia rodzinę o zdarzeniach.  
- Przycisk **„Wyczyść dane”** usuwa wszystkie zapisane kontakty, leki i usługi z `localStorage`.

---

### 🎥 Połączenia wideo WebRTC
- Wbudowany system rozmów wideo peer-to-peer (bezpośrednio między przeglądarkami).  
- Do zestawienia połączenia używany jest serwer STUN (`stun:stun.l.google.com:19302`).  
- Rozmowa działa po wymianie tokenu (np. QR lub linku) między użytkownikami.

---

## 📡 Jak połączyć się z drugą osobą przez wideo (WebRTC)

Aplikacja **Senior-Easy** umożliwia połączenie dwóch użytkowników przez sieć (np. w tym samym domu, biurze lub przez Internet).

### 🔹 Wymagania:
- Obie osoby muszą mieć otwartą aplikację **Senior-Easy** w przeglądarce (np. Chrome, Edge, Firefox).  
- Obie muszą mieć **kamerę i mikrofon**.  
- Połączenie działa najlepiej, jeśli przeglądarki mogą się widzieć przez Internet (niektóre sieci firmowe blokują WebRTC).

---

### 🔸 Krok po kroku:

#### 🧑‍💻 Osoba 1 (inicjator połączenia):
1. Przejdź do zakładki **„Rozmowa Wideo”**.  
2. Wybierz kontakt, z którym chcesz się połączyć.  
3. Kliknij przycisk **„Rozpocznij połączenie”**.  
4. Aplikacja wygeneruje **unikalny kod sesji (offer)** – zostanie pokazany w okienku.  
5. Skopiuj ten kod i przekaż go drugiej osobie (np. SMS-em, e-mailem, przez komunikator).

#### 👩‍💻 Osoba 2 (odbiorca połączenia):
6. Otwórz aplikację **Senior-Easy** w przeglądarce.  
7. Wejdź w zakładkę **„Rozmowa Wideo”** i kliknij **„Dołącz do rozmowy”**.  
8. Wklej kod otrzymany od osoby 1 (offer) do pola tekstowego i kliknij **„Połącz”**.  
9. Aplikacja wygeneruje **kod odpowiedzi (answer)** – przekaż go z powrotem do osoby 1.

#### 🔄 Osoba 1:
10. Wklej kod odpowiedzi (answer) w swoje okienko i zatwierdź.  
11. Po kilku sekundach obie kamery powinny się połączyć.  
12. Możecie rozmawiać bezpośrednio – obraz i dźwięk przesyłane są peer-to-peer (bez serwera pośredniego).

---

### 🔒 Uwaga:
- Żadne dane połączenia wideo nie są zapisywane ani przesyłane przez serwer.  
- Jeśli połączenie nie działa, spróbuj:
  - Odświeżyć stronę (`Ctrl + F5`),  
  - Sprawdzić zgodę na kamerę i mikrofon,  
  - Użyć innej przeglądarki (np. Chrome).

---

## 🧩 Technologia

- **HTML5 + React (UMD + Babel)**  
- **Tailwind CSS** – nowoczesny i prosty wygląd.  
- **LocalStorage API** – trwałe zapisywanie danych użytkownika.  
- **WebRTC API** – połączenia wideo bez serwera pośredniczącego.  

Nie wymaga żadnego backendu — całość działa lokalnie w przeglądarce.  
Aplikację możesz otworzyć po prostu w przeglądarce (np. Chrome lub Edge).

---

## 🚀 Jak uruchomić

1. Pobierz lub sklonuj repozytorium:
   ```bash
   git clone https://github.com/jarpat2791/senior-easy.git
Otwórz plik index.html w przeglądarce.

Aplikacja działa od razu – bez instalacji serwera czy zależności.

🧼 Czyszczenie danych
Jeśli chcesz wyczyścić wszystkie zapisane dane (localStorage):

Przejdź do Ustawień → Wyczyść dane
lub

Naciśnij F12 → Application → Local Storage → Clear All

📦 Struktura projektu
bash
Skopiuj kod
senior-easy/
│
├── index.html        # Główna aplikacja (React + WebRTC)
├── README.md         # Ten plik
└── assets/           # (opcjonalnie) zasoby graficzne, ikony
🔒 Prywatność
Aplikacja działa w 100% lokalnie – żadne dane nie są wysyłane na serwer.

Połączenia wideo są realizowane bezpośrednio między użytkownikami (peer-to-peer).

Dane kontaktowe, leki i usługi są przechowywane tylko w przeglądarce użytkownika.

📞 Pomoc
W razie problemów możesz:

Odświeżyć stronę (Ctrl + F5)

Wyczyścić dane (Ustawienia → Wyczyść dane)

Skontaktować się z twórcą projektu przez GitHub:
https://github.com/jarpat2791/senior-easy

Senior-Easy © 2025
Stworzone z myślą o prostocie i bezpieczeństwie seniorów 💙
