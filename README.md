# Zadanie: Aplikacja "Lista Życzeń Świątecznych"

## Zakes

- **Formularze w React:** Obsługa formularzy bez użycia zewnętrznych bibliotek.
- **Tablice w React:** Dynamiczne dodawanie i usuwanie elementów z listy życzeń.
- **Stylowanie CSS-in-JS:** Użycie biblioteki `styled-components` do stylowania komponentów.
- **Komponenty z biblioteki Material UI:** Użycie komponentów `material-ui` do tworzenia zawartości strony.

## Etapy Zadania

### 1. Przygotowanie Projektu

- Zainstaluj `styled-components`:
  npm install styled-components

- Zainstaluj `material-ui`:
  npm install @mui/material @emotion/react @emotion/styled

### 2. Komponent `WishForm` (Formularz Życzenia)

- W folderze `src/components` utwórz plik `WishForm.js`.
- Stwórz komponent funkcyjny `WishForm`.
- **Formularz:**
  - Dodaj pole tekstowe dla nazwy prezentu (z odpowiednim `label`).
  - Dodaj pole tekstowe dla osoby której wręczymy prezent (z odpowiednim `label`).
  - Dodaj pole numeryczne dla szacunkowej ceny (z odpowiednim `label`).
  - Dodaj przycisk "Dodaj życzenie".
- **Obsługa formularza:**
  - Użyj `useState` do przechowywania wartości pól formularza (nazwa i cena).
  - Zaimplementuj funkcję obsługującą zdarzenie `onSubmit` formularza. Funkcja ta powinna:
    - Zapobiegać domyślnej akcji formularza (przeładowanie strony).
    - Sprawdzać, czy nazwa prezentu nie jest pusta. Jeśli jest pusta, wyświetl alert.
    - Przygotować obiekt reprezentujący nowe życzenie (np. `{ id: Date.now(), name: ..., price: ..., person: ... }`). Użyj `Date.now()` dla unikalnego ID.
    - Przekazać nowy obiekt życzenia do funkcji, którą komponent `WishForm` otrzyma przez props (np. `onAddWish`).
    - Wyczyścić pola formularza po dodaniu życzenia.

### 3. Komponent `WishList` (Lista Życzeń)

- W folderze `src/components` utwórz plik `WishList.js`.
- Stwórz komponent funkcyjny `WishList`.
- **Wyświetlanie listy:**
  - Komponent powinien przyjmować tablicę życzeń jako props (np. `wishes`).
  - Użyj metody `.map()` do iteracji po tablicy życzeń i wyrenderowania każdego życzenia jako oddzielny elementu tabeli.
  - Dla każdego życzenia wyświetl jego nazwę i cenę.
- **Usuwanie życzeń:**
  - Dodaj przycisk "Usuń" obok każdego życzenia.
  - Przycisk "Usuń" powinien wywoływać funkcję przekazaną przez props (np. `onRemoveWish`), przekazując ID życzenia do usunięcia.

### 4. Komponent `App` (Główny Komponent)

- W pliku `src/App.js`:
  - Zaimportuj `WishForm` i `WishList`.
  - Użyj `useState` do przechowywania tablicy życzeń. Zainicjalizuj ją pustą tablicą.
  - Stwórz funkcję `addWish`, która:
    - Przyjmuje nowy obiekt życzenia.
    - Dodaje nowe życzenie do tablicy życzeń w stanie komponentu (używając spread operatora `...`).
  - Stwórz funkcję `removeWish`, która:
    - Przyjmuje ID życzenia do usunięcia.
    - Filtruje tablicę życzeń, usuwając życzenie o podanym ID (używając `.filter()`).
  - Wyrenderuj komponenty:
    - Wyrenderuj `WishForm`, przekazując funkcję `addWish` jako props `onAddWish`.
    - Wyrenderuj `WishList`, przekazując tablicę życzeń jako props `wishes` i funkcję `removeWish` jako props `onRemoveWish`.

### 5. Stylowanie (styled-components)

- Ostyluj aplikację za pomocą styled-components, nie zapomnij o responsywności strony

### 6. Priorytety Życzeń

- Dodaj do formularza WishForm pole typu <select> (rozwijana lista) pozwalające wybrać priorytet życzenia (np. "Niski", "Średni", "Wysoki").
- Zmodyfikuj strukturę obiektu życzenia, aby zawierała pole priority.
- W komponencie WishList wyświetl priorytet obok nazwy i ceny życzenia. Możesz użyć np. ikon lub różnych kolorów tła dla różnych priorytetów.
- Dodaj przyciski lub rozwijaną listę pozwalającą na sortowanie życzeń według priorytetu (rosnąco/malejąco). Wymaga to modyfikacji funkcji removeWish i stanu w App.js.

