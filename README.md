# Zadanie: Aplikacja "Lista Życzeń Świątecznych"

## Etapy Zadania

### 1. Poprawa stylowania

- Umieszczamy formularz skrajnie po prawej stronie, tak żeby tabela zajeła maksymalalną dostępną przestrzeń.
- Dodajemy możliwość ukrycia formulrza za pomocą przycisku (Pokaż formularz / Ukryj formularz) Umieszczonym w prawym górnym rogu aplikacji wewnątrz komponentu "Header". Komponent "Header" powinien wyróżniać się kolorem i z lewej strony zawierać tytuł aplikacji.
- Po ukryciu formularza tabela powinna się rozciągać na całą szerokość.

### 2. Edycja Życzeń

- Dodaj przycisk "Edytuj" obok każdego życzenia (w komponencie `WishList`).
- Po kliknięciu "Edytuj", życzenie powinno przejść w tryb edycji. Można to zrealizować na kilka sposobów:
  - Zamień tekst życzenia (nazwa, cena, priorytet) na pola formularza (`<input>`). Dodaj przycisk "Zapisz" i "Anuluj".
  - Otwórz okno modalne (np. używając prostego komponentu modalnego, bez zewnętrznych bibliotek) z formularzem do edycji życzenia.
