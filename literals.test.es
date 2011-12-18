null

true
false

"string"
"'string'"
"escaped \"quotes\""

"string\
with\
continuations"

"string with unescaped newline
// This should not still be part of the string

'string'
'"string"'
'escaped \'quotes\''

'string\
with\
continuations'

'string with unescaped newline
// This should not still be part of the string

'escaped unnecessary: \a \c \d \e \g \h etc...'
'escaped necessary: \' \" \b \f \n \r \t \v'
"escaped unnecessary: \a \c \d \e \g \h etc..."
"escaped necessary: \' \" \b \f \n \r \t \v"
'hex \x0a unicode \u000a'
"hex \x0a unicode \u000a"
