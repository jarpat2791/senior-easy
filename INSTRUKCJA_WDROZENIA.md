# 📘 Instrukcja Wdrożenia Senior-Easy na GitHub Pages

## 🎯 Krok 1: Przygotowanie Repozytorium

### 1.1 Zaloguj się na GitHub
- Wejdź na [github.com](https://github.com)
- Zaloguj się na swoje konto

### 1.2 Utwórz nowe repozytorium
1. Kliknij przycisk **"+"** w prawym górnym rogu
2. Wybierz **"New repository"**
3. Wypełnij dane:
   - **Repository name**: `senior-easy`
   - **Description**: "Aplikacja dla seniorów - zarządzanie lekami i kontakty"
   - **Public** ✅ (zaznacz)
   - **Add a README file** ❌ (NIE zaznaczaj - dodamy własny)
4. Kliknij **"Create repository"**

---

## 🗂️ Krok 2: Dodanie Plików

### Metoda A: Przez Przeglądarkę (ŁATWIEJSZA)

#### 2.1 Dodaj plik index.html
1. W swoim repozytorium kliknij **"Add file"** → **"Create new file"**
2. Wpisz nazwę: `index.html`
3. Skopiuj cały kod z pliku **index.html** (ten który Ci dostarczyłem wyżej)
4. Wklej w edytor
5. Kliknij **"Commit new file"** na dole strony

#### 2.2 Dodaj plik README.md
1. Kliknij ponownie **"Add file"** → **"Create new file"**
2. Wpisz nazwę: `README.md`
3. Skopiuj zawartość pliku **README.md** (dostarczony wyżej)
4. Pamiętaj zmienić `twoja-nazwa-uzytkownika` na swoją prawdziwą nazwę GitHub!
5. Kliknij **"Commit new file"**

---

### Metoda B: Przez Git (DLA ZAAWANSOWANYCH)

```bash
# 1. Stwórz folder na dysku
mkdir senior-easy
cd senior-easy

# 2. Zainicjuj Git
git init

# 3. Skopiuj pliki index.html i README.md do tego folderu

# 4. Dodaj pliki do Git
git add .
git commit -m "Pierwsza wersja aplikacji Senior-Easy"

# 5. Połącz z GitHub (zmień 'twoja-nazwa' na swoją nazwę użytkownika)
git branch -M main
git remote add origin https://github.com/twoja-nazwa/senior-easy.git
git push -u origin main
```

---

## 🌐 Krok 3: Aktywacja GitHub Pages

### 3.1 Włącz GitHub Pages
1. W swoim repozytorium przejdź do zakładki **"Settings"** (⚙️)
2. W menu po lewej stronie znajdź **"Pages"**
3. W sekcji **"Source"**:
   - Branch: wybierz **"main"**
   - Folder: zostaw **"/ (root)"**
4. Kliknij **"Save"**

### 3.2 Poczekaj na wdrożenie
- GitHub potrzebuje 1-5 minut na opublikowanie
- Odśwież stronę po chwili
- Zobaczysz komunikat z linkiem: **"Your site is live at https://twoja-nazwa.github.io/senior-easy/"**

---

## ✅ Krok 4: Sprawdzenie

### 4.1 Otwórz aplikację
- Kliknij w link który pokazał GitHub
- Lub wpisz w przeglądarce: `https://twoja-nazwa-uzytkownika.github.io/senior-easy/`

### 4.2 Testowanie
Sprawdź czy działają:
- ✅ Przyciski nawigacji
- ✅ Dodawanie leków
- ✅ Kontakty rodzinne
- ✅ Powiadomienia
- ✅ Ustawienia

---

## 🔧 Krok 5: Aktualizacje

### Jak zaktualizować aplikację?

#### Przez przeglądarkę:
1. Wejdź w plik `index.html` w repozytorium
2. Kliknij ikonę ołówka ✏️ (Edit)
3. Wprowadź zmiany
4. Kliknij **"Commit changes"** na dole
5. Poczekaj 1-2 minuty - strona się automatycznie zaktualizuje

#### Przez Git:
```bash
# Wprowadź zmiany w plikach lokalnie
git add .
git commit -m "Opis zmian"
git push
```

---

## 📱 Krok 6: Dodaj aplikację na telefon

### Dla iPhone:
1. Otwórz stronę w Safari
2. Kliknij przycisk "Udostępnij" (📤)
3. Wybierz **"Dodaj do ekranu głównego"**
4. Wpisz nazwę: "Senior-Easy"
5. Kliknij **"Dodaj"**

### Dla Android:
1. Otwórz stronę w Chrome
2. Kliknij menu (⋮)
3. Wybierz **"Dodaj do ekranu głównego"**
4. Wpisz nazwę: "Senior-Easy"
5. Kliknij **"Dodaj"**

---

## 🎨 Dodatkowe Opcje

### Domena własna (opcjonalnie)
Jeśli masz własną domenę (np. senior-easy.pl):
1. W **Settings → Pages**
2. W polu **"Custom domain"** wpisz swoją domenę
3. Skonfiguruj DNS u swojego dostawcy domeny

### HTTPS
- GitHub Pages automatycznie dodaje certyfikat SSL
- Twoja strona będzie dostępna przez bezpieczne HTTPS

---

## ❓ Rozwiązywanie Problemów

### Strona nie działa po 5 minutach?
- Sprawdź czy wybrałeś branch **"main"**
- Upewnij się że plik nazywa się dokładnie **"index.html"** (małe litery!)
- Wejdź w **Actions** i sprawdź czy deployment się udał

### Strona pokazuje błąd 404?
- Upewnij się że repozytorium jest **Public**
- Sprawdź czy GitHub Pages jest włączony w Settings

### Aplikacja nie działa na telefonie?
- Upewnij się że masz połączenie z internetem
- Spróbuj odświeżyć stronę (przeciągnij w dół)
- Wyczyść cache przeglądarki

---

## 📞 Potrzebujesz pomocy?

1. Otwórz **Issue** na GitHubie w swoim repozytorium
2. Opisz problem
3. Dodaj screenshoty jeśli to możliwe

---

## 🎉 Gotowe!

Gratulacje! Twoja aplikacja Senior-Easy jest już LIVE i dostępna dla użytkowników na całym świecie! 🚀

**Link do aplikacji:** https://twoja-nazwa-uzytkownika.github.io/senior-easy/

Udostępnij ten link rodzinie i znajomym!