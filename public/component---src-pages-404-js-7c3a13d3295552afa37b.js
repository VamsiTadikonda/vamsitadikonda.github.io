(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    w2l6: function (e, t, n) {
      'use strict';
      n.r(t);
      var o,
        a,
        c,
        i,
        l = n('MUpH'),
        s = n('q1tI'),
        f = n.n(s),
        u = n('Wbzz'),
        r = n('VeD8'),
        m = n('pQ8y'),
        p = n('Kvkj'),
        d = n('vOnD'),
        g = n('InJ6'),
        b = g.h.colors,
        h = g.h.fonts,
        w = g.h.navDelay,
        y = Object(d.c)(g.d).withConfig({
          displayName: 'sc-404__StyledMainContainer',
          componentId: 'sc-uia3gc-0',
        })(['', ';flex-direction:column;'], g.g.flexCenter),
        j = d.c.h1.withConfig({ displayName: 'sc-404__StyledTitle', componentId: 'sc-uia3gc-1' })(
          ['color:', ';font-family:', ';font-size:12vw;line-height:1;', ' ', ';'],
          b.green,
          h.SFMono,
          g.f.bigDesktop(o || (o = Object(l.a)(['font-size: 200px;']))),
          g.f.phablet(a || (a = Object(l.a)(['font-size: 120px;']))),
        ),
        O = d.c.h2.withConfig({
          displayName: 'sc-404__StyledSubtitle',
          componentId: 'sc-uia3gc-2',
        })(
          ['font-size:3vw;font-weight:400;', ';', ';'],
          g.f.bigDesktop(c || (c = Object(l.a)(['font-size: 50px;']))),
          g.f.phablet(i || (i = Object(l.a)(['font-size: 30px;']))),
        ),
        v = Object(d.c)(u.Link).withConfig({
          displayName: 'sc-404__StyledHomeButton',
          componentId: 'sc-uia3gc-3',
        })(['', ';margin-top:40px;'], g.g.bigButton);
      t.default = function (e) {
        var t = e.location,
          n = Object(s.useState)(!1),
          o = n[0],
          a = n[1];
        return (
          Object(s.useEffect)(function () {
            var e = setTimeout(function () {
              return a(!0);
            }, w);
            return function () {
              return clearTimeout(e);
            };
          }, []),
          f.a.createElement(
            p.i,
            { location: t },
            f.a.createElement(
              r.a,
              { component: null },
              o &&
                f.a.createElement(
                  m.a,
                  { timeout: 500, classNames: 'fade' },
                  f.a.createElement(
                    y,
                    { className: 'fillHeight' },
                    f.a.createElement(j, null, '404'),
                    f.a.createElement(O, null, 'Page Not Found'),
                    f.a.createElement(v, { to: '/' }, 'Go Home'),
                  ),
                ),
            ),
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-404-js-7c3a13d3295552afa37b.js.map
