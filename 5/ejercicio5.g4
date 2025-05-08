grammar ejercicio5;
//Lexemas
MUL : '*';
DIV : '/';
ADD : '+';
SUB : '-';
EQ: '=';
ID : [a-zA-Z_][a-zA-Z_]*;
NUMBER : [0-9]+;
LPAREN : '(';
RPAREN : ')';
NEWLINE:'\r'? '\n';
WS: [ \t]+ -> skip;

//Gramatica
prog: stat+;

stat: decl NEWLINE?             #printExpr   
    | assign NEWLINE?           #asignacion 
    | expr ';' NEWLINE?         #exprStmt
    | NEWLINE                    #blank
    ;

assign: ID '='expr ';';

decl: ('let'|'var') ID ';'
    |('let'|'var') ID '='expr ';'
    ;



expr: expr ('*'|'/') expr    #MulDiv
    | expr ('+'|'-') expr    #AddSub
    | '('expr')'             #parens
    | ID                     #id
    | NUMBER                 #int
    ;

