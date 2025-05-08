// Generated from c:/Users/HP/Documents/VERO/Facultad/2do año/primer semestre/sintaxis/UNIDAD 4/ejercicio 5/5/Calculator.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,14,74,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,1,0,1,0,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,5,
1,5,1,6,1,6,1,7,1,7,1,8,1,8,5,8,52,8,8,10,8,12,8,55,9,8,1,9,1,9,1,10,1,10,
1,11,1,11,1,12,3,12,64,8,12,1,12,1,12,1,13,4,13,69,8,13,11,13,12,13,70,1,
13,1,13,0,0,14,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,
25,13,27,14,1,0,3,3,0,65,90,95,95,97,122,1,0,48,57,2,0,9,9,32,32,76,0,1,
1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,
1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,
0,25,1,0,0,0,0,27,1,0,0,0,1,29,1,0,0,0,3,31,1,0,0,0,5,35,1,0,0,0,7,39,1,
0,0,0,9,41,1,0,0,0,11,43,1,0,0,0,13,45,1,0,0,0,15,47,1,0,0,0,17,49,1,0,0,
0,19,56,1,0,0,0,21,58,1,0,0,0,23,60,1,0,0,0,25,63,1,0,0,0,27,68,1,0,0,0,
29,30,5,59,0,0,30,2,1,0,0,0,31,32,5,108,0,0,32,33,5,101,0,0,33,34,5,116,
0,0,34,4,1,0,0,0,35,36,5,118,0,0,36,37,5,97,0,0,37,38,5,114,0,0,38,6,1,0,
0,0,39,40,5,42,0,0,40,8,1,0,0,0,41,42,5,47,0,0,42,10,1,0,0,0,43,44,5,43,
0,0,44,12,1,0,0,0,45,46,5,45,0,0,46,14,1,0,0,0,47,48,5,61,0,0,48,16,1,0,
0,0,49,53,7,0,0,0,50,52,7,0,0,0,51,50,1,0,0,0,52,55,1,0,0,0,53,51,1,0,0,
0,53,54,1,0,0,0,54,18,1,0,0,0,55,53,1,0,0,0,56,57,7,1,0,0,57,20,1,0,0,0,
58,59,5,40,0,0,59,22,1,0,0,0,60,61,5,41,0,0,61,24,1,0,0,0,62,64,5,13,0,0,
63,62,1,0,0,0,63,64,1,0,0,0,64,65,1,0,0,0,65,66,5,10,0,0,66,26,1,0,0,0,67,
69,7,2,0,0,68,67,1,0,0,0,69,70,1,0,0,0,70,68,1,0,0,0,70,71,1,0,0,0,71,72,
1,0,0,0,72,73,6,13,0,0,73,28,1,0,0,0,4,0,53,63,70,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class CalculatorLexer extends antlr4.Lexer {

    static grammarFileName = "Calculator.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "';'", "'let'", "'var'", "'*'", "'/'", "'+'", 
                         "'-'", "'='", null, null, "'('", "')'" ];
	static symbolicNames = [ null, null, null, null, "MUL", "DIV", "ADD", "SUB", 
                          "EQ", "ID", "NUMBER", "LPAREN", "RPAREN", "NEWLINE", 
                          "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "MUL", "DIV", "ADD", "SUB", 
                      "EQ", "ID", "NUMBER", "LPAREN", "RPAREN", "NEWLINE", 
                      "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

CalculatorLexer.EOF = antlr4.Token.EOF;
CalculatorLexer.T__0 = 1;
CalculatorLexer.T__1 = 2;
CalculatorLexer.T__2 = 3;
CalculatorLexer.MUL = 4;
CalculatorLexer.DIV = 5;
CalculatorLexer.ADD = 6;
CalculatorLexer.SUB = 7;
CalculatorLexer.EQ = 8;
CalculatorLexer.ID = 9;
CalculatorLexer.NUMBER = 10;
CalculatorLexer.LPAREN = 11;
CalculatorLexer.RPAREN = 12;
CalculatorLexer.NEWLINE = 13;
CalculatorLexer.WS = 14;



