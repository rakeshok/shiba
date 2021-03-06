/* parser generated by jison 0.4.15 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,24],$V1=[1,28],$V2=[1,29],$V3=[1,40],$V4=[1,41],$V5=[1,42],$V6=[1,43],$V7=[1,44],$V8=[1,61],$V9=[2,2],$Va=[2,1],$Vb=[8,10,12,14,16],$Vc=[2,22],$Vd=[1,73],$Ve=[2,23],$Vf=[2,8],$Vg=[2,24],$Vh=[2,25],$Vi=[2,9],$Vj=[2,3],$Vk=[4,6,8,10,12,14,16],$Vl=[2,4],$Vm=[2,5],$Vn=[2,6],$Vo=[2,7],$Vp=[8,10,12,14,16,23,25],$Vq=[2,26],$Vr=[2,27],$Vs=[1,80],$Vt=[4,6];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"nummod":3,"NUMMOD":4,"num":5,"NUM":6,"modiso":7,"MODISO":8,"iso":9,"ISO":10,"pre":11,"PRE":12,"suf":13,"SUF":14,"pos":15,"POS":16,"pre2":17,"suf2":18,"source":19,"target":20,"modtarget":21,"command":22,"TO":23,"line":24,"EOF":25,"$accept":0,"$end":1},
terminals_: {2:"error",4:"NUMMOD",6:"NUM",8:"MODISO",10:"ISO",12:"PRE",14:"SUF",16:"POS",23:"TO",25:"EOF"},
productions_: [0,[3,1],[5,1],[7,1],[9,1],[11,1],[13,1],[15,1],[17,1],[17,1],[18,1],[18,1],[19,2],[19,2],[19,2],[19,2],[19,2],[19,2],[19,2],[19,2],[19,2],[19,2],[20,1],[20,1],[20,1],[20,1],[21,1],[21,1],[22,1],[22,1],[22,1],[22,2],[22,3],[22,3],[22,3],[22,3],[24,2]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 var m = yytext.match(/([^µmk]*)([µmk])/i);
    this.$ = { num : m[1].replace(/,/g, ''),
           /* We preserve the original text for printing. */
           str : m[1],
           /* We interpret a minuscule 'm' as million and capitalize
            * it. */
           mod : m[2] === 'm' ? 'M' : m[2]
         };
  
break;
case 2:
 this.$ = { num : Number(yytext.replace(/,/g, '')),
           /* We preserve the original text for printing. */
           str: yytext,
           mod: ''
         }
  
break;
case 3:
 var m = yytext.match(/([µmk])([a-z]*)/i);
    this.$ = { mod : m[1],
           iso : normIso(m[2])
         };
  
break;
case 4:
 this.$ = normIso(yytext) 
break;
case 5: case 6: case 7:
 this.$ = sym2iso(yytext) 
break;
case 8: case 9: case 10: case 11:
 this.$ = $$[$0] 
break;
case 12: case 13: case 20: case 21:
this.$ = { amount: $$[$0-1].num, str: $$[$0-1].str, iso: $$[$0],     mod: $$[$0-1].mod };
break;
case 14:
this.$ = { amount: $$[$0-1].num, str: $$[$0-1].str, iso: $$[$0].iso, mod: $$[$0].mod };
break;
case 15: case 16: case 18: case 19:
this.$ = { amount: $$[$0].num, str: $$[$0].str, iso: $$[$0-1],     mod: $$[$0].mod };
break;
case 17:
this.$ = { amount: $$[$0].num, str: $$[$0].str, iso: $$[$0-1].iso, mod: $$[$0-1].mod };
break;
case 22: case 23: case 24: case 25:
this.$ = $$[$0];
break;
case 26:
this.$ = { iso: $$[$0],     mod: '' };
break;
case 27:
this.$ = { iso: $$[$0].iso, mod: $$[$0].mod };
break;
case 28:
this.$ = { amount: $$[$0].num,    str: $$[$0].str, fromiso: 'BIT',  frommod: '',     toiso: defaultTarget('BIT'), tomod: '' };
break;
case 29:
this.$ = { amount: $$[$0].num,    str: $$[$0].str, fromiso: 'BIT',  frommod: $$[$0].mod, toiso: defaultTarget('BIT'), tomod: '' };
break;
case 30:
this.$ = { amount: $$[$0].amount, str: $$[$0].str, fromiso: $$[$0].iso, frommod: $$[$0].mod, toiso: defaultTarget($$[$0].iso), tomod: '' };
break;
case 31:
this.$ = { amount: $$[$0-1].amount, str: $$[$0-1].str, fromiso: $$[$0-1].iso, frommod: $$[$0-1].mod, toiso: $$[$0].iso, tomod: $$[$0].mod };
break;
case 32:
this.$ = { amount: $$[$0-2].amount, str: $$[$0-2].str, fromiso: $$[$0-2].iso, frommod: $$[$0-2].mod, toiso: $$[$0].iso, tomod: $$[$0].mod };
break;
case 33:
this.$ = { amount: $$[$0].num,    str: $$[$0].str, fromiso: $$[$0-2],     frommod: $$[$0].mod, toiso: $$[$0-1].iso, tomod: $$[$0-1].mod };
break;
case 34:
this.$ = { amount: $$[$0].str,    str: $$[$0].str, fromiso: $$[$0-2],     frommod: $$[$0].mod, toiso: $$[$0-1].iso, tomod: $$[$0-1].mod };
break;
case 35:
this.$ = { amount: $$[$0].str,    str: $$[$0].str, fromiso: $$[$0-2].iso, frommod: $$[$0-2].mod, toiso: $$[$0-1].iso, tomod: $$[$0-1].mod };
break;
case 36:
this.$ = $$[$0-1]; return $$[$0-1];;
break;
}
},
table: [{3:4,4:[1,9],5:3,6:[1,8],7:7,8:[1,15],9:10,10:[1,16],11:12,12:[1,17],13:13,14:[1,18],15:14,16:[1,19],17:11,19:5,20:6,22:2,24:1},{1:[3]},{25:[1,20]},{7:22,8:[1,25],9:21,10:$V0,13:26,14:$V1,15:27,16:$V2,18:23,25:[2,28]},{9:30,10:$V0,13:26,14:$V1,15:27,16:$V2,18:31,25:[2,29]},{7:35,8:$V3,9:36,10:$V4,11:37,12:$V5,13:38,14:$V6,15:39,16:$V7,20:34,21:32,23:[1,33],25:[2,30]},{7:47,8:[1,52],9:48,10:[1,53],11:49,12:[1,54],13:50,14:[1,55],15:51,16:[1,56],20:46,21:45},{5:58,6:$V8,7:60,8:[1,66],9:62,10:[1,67],11:63,12:[1,68],13:64,14:[1,69],15:65,16:[1,70],20:59,21:57},o([8,10,14,16,25],$V9),o([10,14,16,25],$Va),o($Vb,$Vc,{5:71,3:72,4:$Vd,6:$V8}),{3:75,4:$Vd,5:74,6:$V8},o($Vb,$Ve,{4:$Vf,6:$Vf}),o($Vb,$Vg),o($Vb,$Vh,{4:$Vi,6:$Vi}),o([6,8,10,12,14,16],$Vj),o($Vk,$Vl),o($Vk,$Vm),o($Vb,$Vn),o($Vk,$Vo),{1:[2,36]},o($Vp,[2,12]),o($Vp,[2,14]),o($Vp,[2,20]),o($Vp,$Vl),o($Vp,$Vj),o($Vp,[2,10]),o($Vp,[2,11]),o($Vp,$Vn),o($Vp,$Vo),o($Vp,[2,13]),o($Vp,[2,21]),{25:[2,31]},{7:35,8:$V3,9:36,10:$V4,11:37,12:$V5,13:38,14:$V6,15:39,16:$V7,20:34,21:76},{25:$Vq},{25:$Vr},{25:$Vc},{25:$Ve},{25:$Vg},{25:$Vh},{25:$Vj},{25:$Vl},{25:$Vm},{25:$Vn},{25:$Vo},{3:77,4:[1,79],5:78,6:$Vs},o($Vt,$Vq),o($Vt,$Vr),o($Vt,$Vc),o($Vt,$Ve),o($Vt,$Vg),o($Vt,$Vh),o($Vt,$Vj),o($Vt,$Vl),o($Vt,$Vm),o($Vt,$Vn),o($Vt,$Vo),{5:81,6:$Vs},o($Vp,[2,17]),{6:$Vq},{6:$Vr},o($Vp,$V9),{6:$Vc},{6:$Ve},{6:$Vg},{6:$Vh},{6:$Vj},{6:$Vl},{6:$Vm},{6:$Vn},{6:$Vo},o($Vp,[2,15]),o($Vp,[2,16]),o($Vp,$Va),o($Vp,[2,18]),o($Vp,[2,19]),{25:[2,32]},{25:[2,33]},{25:[2,34]},{25:$Va},{25:$V9},{25:[2,35]}],
defaultActions: {20:[2,36],32:[2,31],34:[2,26],35:[2,27],36:[2,22],37:[2,23],38:[2,24],39:[2,25],40:[2,3],41:[2,4],42:[2,5],43:[2,6],44:[2,7],59:[2,26],60:[2,27],62:[2,22],63:[2,23],64:[2,24],65:[2,25],66:[2,3],67:[2,4],68:[2,5],69:[2,6],70:[2,7],76:[2,32],77:[2,33],78:[2,34],79:[2,1],80:[2,2],81:[2,35]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        function lex() {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

function normIso(sym) {
  switch(sym.toUpperCase()) {
  case 'GOLD':     return 'XAU';
  case 'SILVER':   return 'XAG';
  case 'BITS':     return 'BIT';
  case 'SATOSHI':  return 'SAT';
  case 'BITCOIN':
  case 'BITCOINS':
  case 'XBT':      return 'BTC';
  case 'CLAMS':
  case 'CLAMCOINS':
  case 'CLAMCOIN':
  case 'CORNEREDCOIN':
  case 'CORNEREDCOINS':
  case 'JUSTDICECOIN':
  case 'JD-COIN':
  case 'JDCOIN':   return 'CLAM';
  case 'DOGECOIN':
  case 'DOGECOINS':
  case 'XDG':      return 'DOGE';
  case 'LITECOINS':
  case 'LITECOIN': return 'LTC';
  case 'REDDCOINS':
  case 'REDDCOIN': return 'RDD';
  case 'NXTCOIN':  return 'NXT';
  case '子犬':     return 'KOINU';
  default:         return sym.toUpperCase();
  }
}

function sym2iso(sym) {
  switch(sym.toLowerCase()) {
  case '€':   return 'EUR';
  case '£':   return 'GBP';
  case 'rp':  return 'IDR';
  case '₹':   return 'INR';
  case 'zł':  return 'PLN';
  case '$':   return 'USD';
  case '₫':   return 'VND';
  }
}

function defaultTarget(sym) {
  switch(sym.toUpperCase()) {
  case 'BIT':
  case 'BITS':
  case 'BTC':
    return 'USD';
  default:
    return 'BIT';
  }
}
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"flex":true,"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 4;
break;
case 2:return 6;
break;
case 3:return 8;
break;
case 4:return 10;
break;
case 5:return 12;
break;
case 6:return 14;
break;
case 7:return 16;
break;
case 8:return 23;
break;
case 9:return 25;
break;
case 10:return 'INVALID';
break;
case 11:console.log(yy_.yytext);
break;
}
},
rules: [/^(?:\s+)/i,/^(?:(([-+])?(((([1-9][0-9,]+|[0-9]))?\.[0-9]+)|(([1-9][0-9,]+|[0-9])))()?)([µmk]))/i,/^(?:(([-+])?(((([1-9][0-9,]+|[0-9]))?\.[0-9]+)|(([1-9][0-9,]+|[0-9])))()?))/i,/^(?:([µmk])(AED|AFN|ALL|AMD|ANG|AOA|ARS|AUD|AWG|AZN|BAM|BBD|BDT|BGN|BHD|BIF|BMD|BND|BOB|BRL|BSD|BTC|BTN|BWP|BYR|BZD|CAD|CDF|CHF|CLF|CLP|CNY|COP|CRC|CUP|CVE|CZK|DJF|DKK|DOP|DZD|EEK|EGP|ERN|ETB|EUR|FJD|FKP|GBP|GEL|GGP|GHS|GIP|GMD|GNF|GTQ|GYD|HKD|HNL|HRK|HTG|HUF|IDR|ILS|IMP|INR|IQD|IRR|ISK|JEP|JMD|JOD|JPY|KES|KGS|KHR|KMF|KPW|KRW|KWD|KYD|KZT|LAK|LBP|LKR|LRD|LSL|LTL|LVL|LYD|MAD|MDL|MGA|MKD|MMK|MNT|MOP|MRO|MTL|MUR|MVR|MWK|MXN|MYR|MZN|NAD|NGN|NIO|NOK|NPR|NZD|OMR|PAB|PEN|PGK|PHP|PKR|PLN|PYG|QAR|RON|RSD|RUB|RWF|SAR|SBD|SCR|SDG|SEK|SGD|SHP|SLL|SOS|SRD|STD|SVC|SYP|SZL|THB|TJS|TMT|TND|TOP|TRY|TTD|TWD|TZS|UAH|UGX|USD|UYU|UZS|VEF|VND|VUV|WST|XAF|XAG|XAU|XCD|XDR|XOF|XPF|YER|ZAR|ZMK|ZMW|ZWL|GOLD|SILVER|XBT|BITCOINS|BITCOIN|BITS|BIT|SATOSHI|SATOSHIS\|SAT|CLAMS|CLAM|CLAMCOINS|CLAMCOIN|JDCOINS|JDCOIN|JD-COINS|JD-COIN|JUSTDICECOINS|JUSTDICECOIN|CORNEREDCOINS|CORNEREDCOIN|XDG|DOGE|DOGECOINS|DOGECOIN|子犬|KOINU|LTC|LITECOINS|LITECOIN|RDD|REDDCOINS|REDDCOIN|NXT|NXTCOIN))/i,/^(?:(AED|AFN|ALL|AMD|ANG|AOA|ARS|AUD|AWG|AZN|BAM|BBD|BDT|BGN|BHD|BIF|BMD|BND|BOB|BRL|BSD|BTC|BTN|BWP|BYR|BZD|CAD|CDF|CHF|CLF|CLP|CNY|COP|CRC|CUP|CVE|CZK|DJF|DKK|DOP|DZD|EEK|EGP|ERN|ETB|EUR|FJD|FKP|GBP|GEL|GGP|GHS|GIP|GMD|GNF|GTQ|GYD|HKD|HNL|HRK|HTG|HUF|IDR|ILS|IMP|INR|IQD|IRR|ISK|JEP|JMD|JOD|JPY|KES|KGS|KHR|KMF|KPW|KRW|KWD|KYD|KZT|LAK|LBP|LKR|LRD|LSL|LTL|LVL|LYD|MAD|MDL|MGA|MKD|MMK|MNT|MOP|MRO|MTL|MUR|MVR|MWK|MXN|MYR|MZN|NAD|NGN|NIO|NOK|NPR|NZD|OMR|PAB|PEN|PGK|PHP|PKR|PLN|PYG|QAR|RON|RSD|RUB|RWF|SAR|SBD|SCR|SDG|SEK|SGD|SHP|SLL|SOS|SRD|STD|SVC|SYP|SZL|THB|TJS|TMT|TND|TOP|TRY|TTD|TWD|TZS|UAH|UGX|USD|UYU|UZS|VEF|VND|VUV|WST|XAF|XAG|XAU|XCD|XDR|XOF|XPF|YER|ZAR|ZMK|ZMW|ZWL|GOLD|SILVER|XBT|BITCOINS|BITCOIN|BITS|BIT|SATOSHI|SATOSHIS\|SAT|CLAMS|CLAM|CLAMCOINS|CLAMCOIN|JDCOINS|JDCOIN|JD-COINS|JD-COIN|JUSTDICECOINS|JUSTDICECOIN|CORNEREDCOINS|CORNEREDCOIN|XDG|DOGE|DOGECOINS|DOGECOIN|子犬|KOINU|LTC|LITECOINS|LITECOIN|RDD|REDDCOINS|REDDCOIN|NXT|NXTCOIN))/i,/^(?:(£|Rp|₹))/i,/^(?:(zł|₫))/i,/^(?:(\$|€))/i,/^(?:TO)/i,/^(?:$)/i,/^(?:.)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}