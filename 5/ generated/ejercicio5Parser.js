// Generated from c:/Users/HP/Documents/VERO/Facultad/2do año/primer semestre/sintaxis/UNIDAD 4/ejercicio5/5/ejercicio5.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ejercicio5Listener from './ejercicio5Listener.js';
import ejercicio5Visitor from './ejercicio5Visitor.js';

const serializedATN = [4,1,14,68,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,4,0,12,8,0,11,0,12,0,13,1,1,1,1,3,1,18,8,1,1,1,1,1,3,1,22,8,1,1,1,1,
1,1,1,3,1,27,8,1,1,1,3,1,30,8,1,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,1,3,1,3,3,3,46,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,55,8,4,1,4,1,
4,1,4,1,4,1,4,1,4,5,4,63,8,4,10,4,12,4,66,9,4,1,4,0,1,8,5,0,2,4,6,8,0,3,
1,0,2,3,1,0,4,5,1,0,6,7,74,0,11,1,0,0,0,2,29,1,0,0,0,4,31,1,0,0,0,6,45,1,
0,0,0,8,54,1,0,0,0,10,12,3,2,1,0,11,10,1,0,0,0,12,13,1,0,0,0,13,11,1,0,0,
0,13,14,1,0,0,0,14,1,1,0,0,0,15,17,3,6,3,0,16,18,5,13,0,0,17,16,1,0,0,0,
17,18,1,0,0,0,18,30,1,0,0,0,19,21,3,4,2,0,20,22,5,13,0,0,21,20,1,0,0,0,21,
22,1,0,0,0,22,30,1,0,0,0,23,24,3,8,4,0,24,26,5,1,0,0,25,27,5,13,0,0,26,25,
1,0,0,0,26,27,1,0,0,0,27,30,1,0,0,0,28,30,5,13,0,0,29,15,1,0,0,0,29,19,1,
0,0,0,29,23,1,0,0,0,29,28,1,0,0,0,30,3,1,0,0,0,31,32,5,9,0,0,32,33,5,8,0,
0,33,34,3,8,4,0,34,35,5,1,0,0,35,5,1,0,0,0,36,37,7,0,0,0,37,38,5,9,0,0,38,
46,5,1,0,0,39,40,7,0,0,0,40,41,5,9,0,0,41,42,5,8,0,0,42,43,3,8,4,0,43,44,
5,1,0,0,44,46,1,0,0,0,45,36,1,0,0,0,45,39,1,0,0,0,46,7,1,0,0,0,47,48,6,4,
-1,0,48,49,5,11,0,0,49,50,3,8,4,0,50,51,5,12,0,0,51,55,1,0,0,0,52,55,5,9,
0,0,53,55,5,10,0,0,54,47,1,0,0,0,54,52,1,0,0,0,54,53,1,0,0,0,55,64,1,0,0,
0,56,57,10,5,0,0,57,58,7,1,0,0,58,63,3,8,4,6,59,60,10,4,0,0,60,61,7,2,0,
0,61,63,3,8,4,5,62,56,1,0,0,0,62,59,1,0,0,0,63,66,1,0,0,0,64,62,1,0,0,0,
64,65,1,0,0,0,65,9,1,0,0,0,66,64,1,0,0,0,9,13,17,21,26,29,45,54,62,64];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ejercicio5Parser extends antlr4.Parser {

    static grammarFileName = "ejercicio5.g4";
    static literalNames = [ null, "';'", "'let'", "'var'", "'*'", "'/'", 
                            "'+'", "'-'", "'='", null, null, "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, "MUL", "DIV", "ADD", 
                             "SUB", "EQ", "ID", "NUMBER", "LPAREN", "RPAREN", 
                             "NEWLINE", "WS" ];
    static ruleNames = [ "prog", "stat", "assign", "decl", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ejercicio5Parser.ruleNames;
        this.literalNames = ejercicio5Parser.literalNames;
        this.symbolicNames = ejercicio5Parser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 4:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 5);
    		case 1:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ejercicio5Parser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 11; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 10;
	            this.stat();
	            this.state = 13; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 11788) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stat() {
	    let localctx = new StatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ejercicio5Parser.RULE_stat);
	    try {
	        this.state = 29;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new PrintExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 15;
	            this.decl();
	            this.state = 17;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	            if(la_===1) {
	                this.state = 16;
	                this.match(ejercicio5Parser.NEWLINE);

	            }
	            break;

	        case 2:
	            localctx = new AsignacionContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 19;
	            this.assign();
	            this.state = 21;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	            if(la_===1) {
	                this.state = 20;
	                this.match(ejercicio5Parser.NEWLINE);

	            }
	            break;

	        case 3:
	            localctx = new ExprStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 23;
	            this.expr(0);
	            this.state = 24;
	            this.match(ejercicio5Parser.T__0);
	            this.state = 26;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	            if(la_===1) {
	                this.state = 25;
	                this.match(ejercicio5Parser.NEWLINE);

	            }
	            break;

	        case 4:
	            localctx = new BlankContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 28;
	            this.match(ejercicio5Parser.NEWLINE);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assign() {
	    let localctx = new AssignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ejercicio5Parser.RULE_assign);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.match(ejercicio5Parser.ID);
	        this.state = 32;
	        this.match(ejercicio5Parser.EQ);
	        this.state = 33;
	        this.expr(0);
	        this.state = 34;
	        this.match(ejercicio5Parser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	decl() {
	    let localctx = new DeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ejercicio5Parser.RULE_decl);
	    var _la = 0;
	    try {
	        this.state = 45;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 36;
	            _la = this._input.LA(1);
	            if(!(_la===2 || _la===3)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 37;
	            this.match(ejercicio5Parser.ID);
	            this.state = 38;
	            this.match(ejercicio5Parser.T__0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 39;
	            _la = this._input.LA(1);
	            if(!(_la===2 || _la===3)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 40;
	            this.match(ejercicio5Parser.ID);
	            this.state = 41;
	            this.match(ejercicio5Parser.EQ);
	            this.state = 42;
	            this.expr(0);
	            this.state = 43;
	            this.match(ejercicio5Parser.T__0);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 8;
	    this.enterRecursionRule(localctx, 8, ejercicio5Parser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	            localctx = new ParensContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 48;
	            this.match(ejercicio5Parser.LPAREN);
	            this.state = 49;
	            this.expr(0);
	            this.state = 50;
	            this.match(ejercicio5Parser.RPAREN);
	            break;
	        case 9:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 52;
	            this.match(ejercicio5Parser.ID);
	            break;
	        case 10:
	            localctx = new IntContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 53;
	            this.match(ejercicio5Parser.NUMBER);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 64;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 62;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulDivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ejercicio5Parser.RULE_expr);
	                    this.state = 56;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 57;
	                    _la = this._input.LA(1);
	                    if(!(_la===4 || _la===5)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 58;
	                    this.expr(6);
	                    break;

	                case 2:
	                    localctx = new AddSubContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ejercicio5Parser.RULE_expr);
	                    this.state = 59;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 60;
	                    _la = this._input.LA(1);
	                    if(!(_la===6 || _la===7)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 61;
	                    this.expr(5);
	                    break;

	                } 
	            }
	            this.state = 66;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

ejercicio5Parser.EOF = antlr4.Token.EOF;
ejercicio5Parser.T__0 = 1;
ejercicio5Parser.T__1 = 2;
ejercicio5Parser.T__2 = 3;
ejercicio5Parser.MUL = 4;
ejercicio5Parser.DIV = 5;
ejercicio5Parser.ADD = 6;
ejercicio5Parser.SUB = 7;
ejercicio5Parser.EQ = 8;
ejercicio5Parser.ID = 9;
ejercicio5Parser.NUMBER = 10;
ejercicio5Parser.LPAREN = 11;
ejercicio5Parser.RPAREN = 12;
ejercicio5Parser.NEWLINE = 13;
ejercicio5Parser.WS = 14;

ejercicio5Parser.RULE_prog = 0;
ejercicio5Parser.RULE_stat = 1;
ejercicio5Parser.RULE_assign = 2;
ejercicio5Parser.RULE_decl = 3;
ejercicio5Parser.RULE_expr = 4;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ejercicio5Parser.RULE_prog;
    }

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ejercicio5Listener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ejercicio5Listener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ejercicio5Visitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ejercicio5Parser.RULE_stat;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AsignacionContext extends StatContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
	};

	NEWLINE() {
	    return this.getToken(ejercicio5Parser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ejercicio5Listener ) {
	        listener.enterAsignacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ejercicio5Listener ) {
	        listener.exitAsignacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ejercicio5Visitor ) {
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ejercicio5Parser.AsignacionContext = AsignacionContext;

class ExprStmtContext extends StatContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	NEWLINE() {
	    return this.getToken(ejercicio5Parser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ejercicio5Listener ) {
	        listener.enterExprStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ejercicio5Listener ) {
	        listener.exitExprStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ejercicio5Visitor ) {
	        return visitor.visitExprStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ejercicio5Parser.ExprStmtContext = ExprStmtContext;

class BlankContext extends StatContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NEWLINE() {
	    return this.getToken(ejercicio5Parser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ejercicio5Listener ) {
	        listener.enterBlank(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ejercicio5Listener ) {
	        listener.exitBlank(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ejercicio5Visitor ) {
	        return visitor.visitBlank(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ejercicio5Parser.BlankContext = BlankContext;

class PrintExprContext extends StatContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	decl() {
	    return this.getTypedRuleContext(DeclContext,0);
	};

	NEWLINE() {
	    return this.getToken(ejercicio5Parser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ejercicio5Listener ) {
	        listener.enterPrintExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ejercicio5Listener ) {
	        listener.exitPrintExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ejercicio5Visitor ) {
	        return visitor.visitPrintExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ejercicio5Parser.PrintExprContext = PrintExprContext;

class AssignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ejercicio5Parser.RULE_assign;
    }

	ID() {
	    return this.getToken(ejercicio5Parser.ID, 0);
	};

	EQ() {
	    return this.getToken(ejercicio5Parser.EQ, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ejercicio5Listener ) {
	        listener.enterAssign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ejercicio5Listener ) {
	        listener.exitAssign(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ejercicio5Visitor ) {
	        return visitor.visitAssign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ejercicio5Parser.RULE_decl;
    }

	ID() {
	    return this.getToken(ejercicio5Parser.ID, 0);
	};

	EQ() {
	    return this.getToken(ejercicio5Parser.EQ, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ejercicio5Listener ) {
	        listener.enterDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ejercicio5Listener ) {
	        listener.exitDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ejercicio5Visitor ) {
	        return visitor.visitDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ejercicio5Parser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ParensContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(ejercicio5Parser.LPAREN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	RPAREN() {
	    return this.getToken(ejercicio5Parser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ejercicio5Listener ) {
	        listener.enterParens(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ejercicio5Listener ) {
	        listener.exitParens(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ejercicio5Visitor ) {
	        return visitor.visitParens(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ejercicio5Parser.ParensContext = ParensContext;

class MulDivContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	MUL() {
	    return this.getToken(ejercicio5Parser.MUL, 0);
	};

	DIV() {
	    return this.getToken(ejercicio5Parser.DIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ejercicio5Listener ) {
	        listener.enterMulDiv(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ejercicio5Listener ) {
	        listener.exitMulDiv(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ejercicio5Visitor ) {
	        return visitor.visitMulDiv(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ejercicio5Parser.MulDivContext = MulDivContext;

class AddSubContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	ADD() {
	    return this.getToken(ejercicio5Parser.ADD, 0);
	};

	SUB() {
	    return this.getToken(ejercicio5Parser.SUB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ejercicio5Listener ) {
	        listener.enterAddSub(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ejercicio5Listener ) {
	        listener.exitAddSub(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ejercicio5Visitor ) {
	        return visitor.visitAddSub(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ejercicio5Parser.AddSubContext = AddSubContext;

class IdContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(ejercicio5Parser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ejercicio5Listener ) {
	        listener.enterId(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ejercicio5Listener ) {
	        listener.exitId(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ejercicio5Visitor ) {
	        return visitor.visitId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ejercicio5Parser.IdContext = IdContext;

class IntContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMBER() {
	    return this.getToken(ejercicio5Parser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ejercicio5Listener ) {
	        listener.enterInt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ejercicio5Listener ) {
	        listener.exitInt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ejercicio5Visitor ) {
	        return visitor.visitInt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ejercicio5Parser.IntContext = IntContext;


ejercicio5Parser.ProgContext = ProgContext; 
ejercicio5Parser.StatContext = StatContext; 
ejercicio5Parser.AssignContext = AssignContext; 
ejercicio5Parser.DeclContext = DeclContext; 
ejercicio5Parser.ExprContext = ExprContext; 
