/**
   Implemented from:
   Chapter 8 - Functional Parsers
   Programming in Haskell
   by Graham Hutton

   Because javascript does not have tuples,
   we will implement (foo, bar) as
   {'v': foo, 'r': bar}

   v stands for value
   r stands for rest
*/

(function (root) {
    'use strict';

    function parse(p, inp) {
        return p(inp);
    }

    function ret(v) {
        return function (inp) {
            return [{'v': v,
                     'r': inp}];
        };
    }

    function failure() {
        return function (ignore) {
            return [];
        };
    }

    function item() {
        return function (inp) {
            if (inp.length === 0) {
                return [];
            }
            return [{'v': inp[0], 'r': inp.slice(1)}];
        };
    }

    function then(p, f2p) {
        return function (inp) {
            var val = '',
                out = '',
                res = p(inp);

            if (res.length === 0) {
                return [];
            }
            val = res[0].v;
            out = res[0].r;
            return parse(f2p(val), out);
        };
    }

    function orElse(p1, p2) {
        return function (inp) {
            var res = p1(inp);
            if (res.length === 0) {
                return parse(p2, inp);
            }
            return res;
        };
    }

    function sat(pred) {
        return function (inp) {
            var res = parse(item(), inp);
            if (res.length === 1 && pred(res[0].v)) {
                return res;
            }
            return [];
        };
    }

    function char(c) {
        return sat(function (v) {
            return (c === v);
        });
    }

    function string(str) {
        var s = '',
            xs = '';

        if (str.length === 0) {
            return ret('');
        }

        s = str[0];
        xs = str.slice(1);

        console.log('got: '.concat(s));

        return then(char(s),
                    then(string(xs),
                         function (ignore) {
                             ret(s.concat(xs))}));
    }

    root.parser = {
        'parse': parse,
        'then': then,
        'orElse': orElse,
        'sat': sat,
        'char': char,
        'string': string,
        'ret': ret,
        'failure': failure,
        'item': item
    };

}(this));
