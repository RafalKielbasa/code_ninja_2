# Zadanie: Aplikacja "Lista Życzeń Świątecznych"

## Etapy Zadania

### 1. Komponent `WishList` (Lista Życzeń)

- Robimy refactor kodu, w celu poprawy jego czytelności.
- Dodaj kolumne w tabeli o nazwie "Actions" a w nich przyciski "Usuń".
- Przycisk "Usuń" powinien wywoływać funkcję przekazaną przez props (np. `onRemoveWish`), przekazując ID życzenia do usunięcia.

### 2. Stylowanie (styled-components)

- Ostyluj aplikację za pomocą styled-components, nie zapomnij o responsywności strony
- Aplikacja powinna mieć układ dwóch kolumn, jedna ta tabelę druga na formularz.
- Należy pamiętać o opdowiednim paddingu.

### 3. Priorytety Życzeń

- Dodaj do formularza WishForm pole typu <select> (rozwijana lista) pozwalające wybrać priorytet życzenia (np. "Niski", "Średni", "Wysoki").
- Zmodyfikuj strukturę obiektu życzenia, aby zawierała pole priority.
- W komponencie WishList wyświetl priorytet obok nazwy i ceny życzenia. Możesz użyć np. ikon lub różnych kolorów tła dla różnych priorytetów.
- Dodaj przyciski lub rozwijaną listę pozwalającą na sortowanie życzeń według priorytetu (rosnąco/malejąco).
