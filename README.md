# Zadanie

## 1. Zapoznaj się z plikami projektu

- Przejrzyj strukturę katalogów i plików w projekcie.
- Upewnij się, że masz wszystkie potrzebne zależności.

## 2. Uruchom projekt

- Sprawdź, czy aplikacja działa poprawnie przed wprowadzeniem zmian.

## 3. Stworzenie komponentu `UserCard`

- W folderze `components` utwórz komponent `UserCard`.
- Komponent powinien przyjmować przez `props`:
  - `name`
  - `age`
  - `role`
- Dodaj domyślne wartości dla wszystkich `props`.
- Wyświetl dane w estetycznie sformatowanym boksie.

## 4. Dodanie listy użytkowników w `App.js`

- W `App.js` dodaj `useState` z listą użytkowników:
  ```jsx
  const [users, setUsers] = useState([
    { name: 'Alice', age: 25, role: 'Developer' },
    { name: 'Bob', age: 30, role: 'Designer' },
  ])
  ```

## 5. Różne sposoby przekazywania props

- Przekaż props zarówno pojedynczo
- Jak i przy użyciu spread operatora

## 6. Dodanie nowego użytkownika

- W App.js dodaj przycisk, który pozwoli na dodanie nowego użytkownika do listy

## 7. Usuwanie użytkownika
- W UserCard dodaj przycisk X, który pozwoli na usunięcie użytkownika.