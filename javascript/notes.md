# Notater i uorganisert rekkefølge

node --watch YOURFILE
    Live oppdatering på .js filen din mens du jobber

# KUL RESSURS:
https://developwithmi.com/labs/


# Sett opp en server



https://gist.github.com/hensg/43bc71c21d1f79385892352a390aa2ca
# Ghostty shortcuts

- De viktigste:
    cmd + d 
    cmd + shift + d
    cmd + ]
    cmd + t
    cmd + w

# Neovim cheatsheet

## Buffers

- `:ls` — vis alle buffere
- `:b 2` — gå til buffer 2
- `:bn` — gå til neste buffer
- `:bp` — gå til forrige buffer
- `<C-^>` — bytt mellom nåværende og forrige buffer
- `:bd` — lukk nåværende buffer
- `:bd!` — lukk buffer uten å lagre endringer

## Splits / windows

- `<C-w>v` — lag en vertikal split
- `<C-w>s` — lag en horisontal split
- `<C-w>c` — lukk nåværende split/vindu
- `<C-w>o` — behold bare dette vinduet, lukk alle andre splits

## Navigere mellom splits

- `<C-w>h` — gå til splitten til venstre
- `<C-w>j` — gå til splitten under
- `<C-w>k` — gå til splitten over
- `<C-w>l` — gå til splitten til høyre
- `<C-w>w` — gå til neste split
- `<C-w>p` — gå til forrige split

## Lagre / avslutte

- `:w` — lagre
- `:q` — quit; lukker vindu eller avslutter Neovim hvis dette er siste vindu
- `:wq` — lagre og avslutt
- `:q!` — avslutt uten å lagre
- `gc` - kommenter ut

## Husk

- `<C-w>o` betyr: trykk `Ctrl+w`, slipp, trykk så `o`
- På Mac betyr `<C-...>` = `Control`, ikke `Command`
- `:q` er ikke det samme som “unsplit”
- Bruk `:b 2` for en spesifikk buffer
- Bruk `<C-^>` for å hoppe mellom de to siste bufferne

## Navigering
- `_` - first char of line
- `0` - absolute start of line
- `$` - last char of current line

