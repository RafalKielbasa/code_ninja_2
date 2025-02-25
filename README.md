# Zadanie: Aplikacja "Lista Życzeń Świątecznych"

## Etapy Zadania

### 1. Priorytety Życzeń

- Dostosowujemy wartość priority do sortowania. Dodajemy tłumaczenie do kolumny priority.
- W komponencie WishList wyświetl priorytet w formie komponentu zmieniającego kolor w zależności od priorytetu.
- Dodaj przyciski lub rozwijaną listę pozwalającą na sortowanie życzeń według priorytetu (rosnąco/malejąco).
- Dodaj odpowiednią logikę która pozwoli sortowanie według priorytetu.

### 2. Poprawa stylowania

- Umieszczamy formularz skrajnie po prawej stronie, tak żeby tabela zajeła maksymalalną dostępną przestrzeń.
- Dodajemy możliwość ukrycia formulrza za pomocą przycisku (Pokaż formularz / Ukryj formularz) Umieszczonym w prawym górnym rogu aplikacji.
- Po ukryciu formularza tabela powinna się rozciągać na całą szerokość.

### 3. Edycja Życzeń

- Dodaj przycisk "Edytuj" obok każdego życzenia (w komponencie `WishList`).
- Po kliknięciu "Edytuj", życzenie powinno przejść w tryb edycji. Można to zrealizować na kilka sposobów:
  - Zamień tekst życzenia (nazwa, cena, priorytet) na pola formularza (`<input>`). Dodaj przycisk "Zapisz" i "Anuluj".
  - Otwórz okno modalne (np. używając prostego komponentu modalnego, bez zewnętrznych bibliotek) z formularzem do edycji życzenia.
