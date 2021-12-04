/*eslint-disable */
// 不是我写的，别开 lint
(function (t, e) {
  "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
      ? (module.exports = e())
      : (t.pxmu = e())
})(this, function () {
      "use strict";
      let t = 0.3,
        e = {
          loading: !0,
          toast: !0,
        },
        i = 0,
        o = "pxmu-class__name__fix";
      var n = {
        pxmulog: function (t, e) { },
        totop: function () {
          var t = null;
          t = setInterval(function () {
            var e = document.documentElement.scrollTop || document.body.scrollTop,
              i = Math.floor(-e / 6);
            (document.documentElement.scrollTop = document.body.scrollTop = e + i),
              !0,
              0 == e && clearInterval(t);
          }, 30);
        },
        overlap: function (t) {
          "object" == typeof t &&
            t &&
            (!1 === t.loading ? (e.loading = !1) : (e.loading = !0),
              !1 === t.toast ? (e.toast = !1) : (e.toast = !0));
        },
        copy: function (t = "") {
          if ("object" != typeof t) return this.addcopy(t);
          if (t.el) {
            let o = t.el.substr(0, 1);
            if ("#" == o) var e = t.el.split("#");
            else {
              if ("." != o)
                return {
                  status: 0,
                  msg: "el入参错误",
                };
              e = t.el.split(".");
            }
            e = !e[0] && e[1] ? e[1] : e[0] && e[1] ? e[1] : e[0];
            var i = "";
            if (
              ((i =
                "#" == o
                  ? document.getElementById(e)
                  : document.getElementsByClassName(e)[0]),
                i)
            ) {
              let t = i.innerText;
              return this.addcopy(t);
            }
            return {
              status: 0,
              msg: "el入参的dom不存在",
            };
          }
        },
        addcopy: function (t = "") {
          var e = document.createElement("input");
          e.setAttribute("class", "pxmu-copy-item"),
            e.setAttribute("readonly", "readonly"),
            e.setAttribute("value", t),
            document.body.appendChild(e),
            e.setSelectionRange(0, 9999),
            e.select();
          var i = document.execCommand("copy");
          document.body.removeChild(e);
          var o = {
            status: !0,
            msg: "",
          };
          return !0 !== i && ((o.status = !1), (o.msg = "复制失败，请手动复制")), o;
        },
        loading: function (t) {
          this.addLoading("loading", t);
        },
        success: function (t) {
          this.addLoading("success", t);
        },
        fail: function (t) {
          this.addLoading("fail", t);
        },
        diaglog: function (t) {
          var e = {
            title: {
              text: "温馨提示",
              color: "#000",
              fontsize: 20,
              fontweight: "bold",
              center: !1,
            },
            content: {
              text: "",
              color: "#666",
              fontsize: 15.555,
              fontweight: "normal",
            },
            line: {
              solid: 0,
              color: "#eee",
            },
            btn: {
              left: {
                text: "取消",
                color: "#f50",
                fontsize: 16,
                fontweight: "bold",
                bg: "#fff",
                solid: 1,
                solidcolor: "#f50",
              },
              right: {
                text: "确定",
                color: "#fff",
                fontsize: 16,
                fontweight: "bold",
                bg: "#f50",
                solid: 1,
                solidcolor: "#f50",
              },
            },
            congif: {
              cbclose: !1,
              cbcloseall: !1,
              cbload: !0,
              cbloadcolor: "#fff",
              cbloadtext: "",
              bg: "rgba(0,0,0,0.65)",
              inscroll: !0,
              anclose: !0,
              callback: null,
              animation: "none",
              btnstyle: !1,
              btncount: !1,
            },
          };
          if ("object" == typeof t)
            for (let i in t)
              for (let o in t[i])
                if ("btn" == i) for (let n in t[i][o]) e[i][o][n] = t[i][o][n];
                else e[i][o] = t[i][o];
          else e.content.text = t;
          let i = e.content.text;
          i &&
            "string" == typeof i &&
            ((e.content.text = i.replace(/\n/g, "</br>")), (i = null)),
            !0 === e.congif.btnstyle
              ? (e.congif.btnstyle = 50)
              : (e.congif.btnstyle = 3);
          var o = document.createElement("div"),
            a = "pxmu-diag-item";
          e.congif.inscroll &&
            ((a += " pxmu-diag-inscroll"),
              (document.getElementsByTagName("body")[0].className +=
                " pxmu-body-inscroll")),
            o.setAttribute("style", "background:" + e.congif.bg),
            o.setAttribute("class", a);
          var s = '<div class="pxmu-diag">';
          "none" != e.congif.animation &&
            (s = '<div class="pxmu-diag pxmu-' + e.congif.animation + '-in">');
          var r = "";
          e.title.text &&
            ((r =
              "padding-top:15px;font-weight: " +
              e.title.fontweight +
              ";color: " +
              e.title.color +
              ";font-size: " +
              parseInt(e.title.fontsize) +
              "px;"),
              !0 === e.title.center && (r += "text-align:center;"),
              e.content.text || (r += "margin:15px 0"),
              (s += '<div style="' + r + '">' + e.title.text + "</div>")),
            e.content.text &&
            ((r =
              "font-size: " +
              e.content.fontsize +
              "px;color: " +
              e.content.color),
              (s +=
                '<div class="pxmu-diag-text" style="' +
                r +
                '">' +
                e.content.text +
                "</div>"));
          let l = "";
          !isNaN(e.line.solid) &&
            e.line.solid > 0 &&
            ((s +=
              '<div style="margin:10px 0;height:' +
              e.line.solid +
              "px;background:" +
              e.line.color +
              '"></div>'),
              (l = "padding:0;height:auto;margin:0;")),
            (s += '<div style="' + l + '" class="pxmu-diag-btn">'),
            !1 === e.congif.btncount &&
            ((r =
              l +
              ";background: " +
              e.btn.left.bg +
              ";color: " +
              e.btn.left.color +
              ";border: solid " +
              e.btn.left.solid +
              "px " +
              e.btn.left.solidcolor +
              ";font-size:" +
              e.btn.left.fontsize +
              "px;"),
              (r +=
                "font-weight:" +
                e.btn.left.fontweight +
                ";border-radius: " +
                e.congif.btnstyle +
                "px;"),
              (s +=
                '<div style="' +
                r +
                '" class="pxmu-diag-btn-left"> ' +
                e.btn.left.text +
                " </div>"),
              (s += l
                ? '<span style="width:1px;background:' + e.line.color + '"></span>'
                : '<span style="flex:0.1"></span>')),
            (r =
              l +
              ";background: " +
              e.btn.right.bg +
              ";color: " +
              e.btn.right.color +
              ";border: solid " +
              e.btn.right.solid +
              "px " +
              e.btn.right.solidcolor +
              ";font-size:" +
              e.btn.right.fontsize +
              "px;"),
            (r +=
              "font-weight:" +
              e.btn.right.fontweight +
              ";border-radius: " +
              e.congif.btnstyle +
              "px;"),
            (s +=
              '<div style="' +
              r +
              '" class="pxmu-diag-btn-right"> ' +
              e.btn.right.text +
              " </div>"),
            (s += "</div></div></div>"),
            (o.innerHTML = s),
            document.body.appendChild(o);
          var m = function (t) {
            return document.querySelector(t);
          };
          return (
            (m(".pxmu-diag-item").onclick = function (t) {
              if (
                !1 === e.congif.cbcloseall &&
                !1 === e.congif.cbclose &&
                !0 === e.congif.anclose
              )
                return n.closediaglog(0, e.congif.animation), !1;
              t.target.className, t.target.className;
            }),
            new Promise((t, i) => {
              m(".pxmu-diag-btn").onclick = function (i) {
                var o = {
                  type: "click",
                  btn: "right",
                };
                if (
                  ("pxmu-diag-btn-left" == i.target.className &&
                    ((o.btn = "left"), t(o)),
                    "pxmu-diag-btn-right" == i.target.className &&
                    (t(o), !0 === e.congif.cbclose || !0 === e.congif.cbcloseall))
                )
                  return (
                    !0 === e.congif.cbload &&
                    ((s =
                      '<span class="pxmu-circular-in" style="width:20px;color:' +
                      e.congif.cbloadcolor +
                      '"><svg viewBox="25 25 50 50" class="pxmu-loading-icon"><circle cx="50" cy="50" r="20" fill="none"></circle></svg></span>'),
                      e.congif.cbloadtext &&
                      (s +=
                        '<span style="padding-left: 5px;">' +
                        e.congif.cbloadtext +
                        "</span>"),
                      (m(".pxmu-diag-btn-right").innerHTML = s)),
                    !1
                  );
                !1 === e.congif.cbcloseall && n.closediaglog(0, e.congif.animation);
              };
            })
          );
        },
        closediaglog: function (t = 0, e = "none") {
          if ((n.pxmulog(e), !1 === t)) return !1;
          let i = 300;
          "none" == e && (i = 0);
          var o = document.getElementsByClassName("pxmu-diag");
          o && o[0] && o[0].setAttribute("class", "pxmu-diag pxmu-" + e + "-out"),
            this._close_html_diaglog(i, "pxmu-diag-item", e);
        },
        closeload: function (t = 0) {
          this._close_html_diaglog(t, "pxmu-loading-item");
        },
        _close_html_diaglog: function (e = 0, i, o) {
          (e = parseInt(e)),
            setTimeout(function () {
              n._body_remove_inscroll();
              var e = document.getElementsByClassName(i);
              let a = e.length;
              if (a < 0) return !1;
              for (var s = 0; s < a; s++) {
                let i = e[s].className;
                n.pxmulog(i);
                let a = 0;
                "none" != o &&
                  ((i += " pxmu-fade-out"), e[s].setAttribute("class", i), (a = t)),
                  setTimeout(function () {
                    e[0] && document.body.removeChild(e[0]);
                  }, 1e3 * a);
              }
            }, e);
        },
        addLoading: function (a, s) {
          if ("object" != typeof s) {
            let t = s;
            s = {};
            s.msg = t;
          }
          var r = {
            msg: s.msg || "",
            time: s.time || 2500,
            bg: s.bg || "rgba(0, 0, 0, 0.65)",
            color: s.color || "#fff",
            animation: s.animation || "fade",
            close: !1 !== s.close,
            inscroll: !0 === s.inscroll,
            inscrollbg: s.inscrollbg || "",
          };
          if (!0 === e.loading) {
            var l = document.getElementsByClassName("pxmu-loading-item")[0];
            n.pxmulog(l),
              l && (document.body.removeChild(l), n._body_remove_inscroll());
          }
          r.time = parseInt(r.time);
          var m = document.createElement("div");
          i++;
          let d = o + i,
            c = "pxmu-loading-item pxmu-fixed " + d;
          r.inscroll &&
            ((c += " pxmu-loading-inscroll"),
              (document.getElementsByTagName("body")[0].className +=
                " pxmu-body-inscroll")),
            m.setAttribute("class", c),
            r.inscrollbg && m.setAttribute("style", "background:" + r.inscrollbg);
          let u = this._pxmu_get_load_Type(a, r.color);
          if (!u) return !1;
          var p =
            '<div class="pxmu-loading pxmu-' +
            r.animation +
            '-in" style="background:' +
            r.bg +
            ";color:" +
            r.color +
            ';">';
          (p +=
            '<div class="pxmu-loading-ing"><span style="color:' +
            r.color +
            ';" class="pxmu-loading-spinner pxmu-loading-spinner-' +
            a +
            " pxmu-loading-circular-" +
            a +
            '">' +
            u +
            '</span></div><div class="pxmu-toast-text">' +
            r.msg +
            "</div></div>"),
            (m.innerHTML = p),
            document.body.appendChild(m),
            r.close &&
            setTimeout(function () {
              m.setAttribute("class", c + " pxmu-" + r.animation + "-out"),
                setTimeout(function () {
                  (l = document.getElementsByClassName(d)[0]),
                    n.pxmulog(d),
                    l && document.body.removeChild(l),
                    n._body_remove_inscroll();
                }, 1e3 * t);
            }, r.time);
        },
        _body_remove_inscroll: function () {
          let t = document.getElementsByTagName("body")[0].classList.value;
          -1 != t.indexOf("-inscroll") &&
            document
              .getElementsByTagName("body")[0]
              .classList.remove("pxmu-body-inscroll");
        },
        _pxmu_get_load_Type: function (t, e) {
          switch (t) {
            case "loading":
              return '<svg viewBox="25 25 50 50" class="pxmu-loading-icon"><circle cx="50" cy="50" r="20" fill="none"></circle></svg>';
            case "success":
              return (
                "<svg fill=" +
                e +
                ' t="1621923083503" class="pxmu-success-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3022"><path d="M963.2 208c-12.8-12.8-32-12.8-44.8 0L396.8 668.8c-12.8 9.6-28.8 9.6-41.6 0l-249.6-192c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l294.4 294.4c12.8 12.8 32 12.8 44.8 0L963.2 252.8c12.8-12.8 12.8-35.2 0-44.8z" p-id="3023"></path></svg>'
              );
            case "fail":
              return (
                "<svg fill=" +
                e +
                ' t="1621924513860" class="pxmu-success-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6710"><path d="M468.114286 621.714286c7.314286 21.942857 21.942857 36.571429 43.885714 36.571428s36.571429-14.628571 43.885714-36.571428L585.142857 219.428571c0-43.885714-36.571429-73.142857-73.142857-73.142857-43.885714 0-73.142857 36.571429-73.142857 80.457143l29.257143 394.971429zM512 731.428571c-43.885714 0-73.142857 29.257143-73.142857 73.142858s29.257143 73.142857 73.142857 73.142857 73.142857-29.257143 73.142857-73.142857-29.257143-73.142857-73.142857-73.142858z" p-id="6711"></path></svg>'
              );
            default:
              return null;
          }
        },
        toast: function (a = "") {
          if ("object" != typeof a) {
            let t = a;
            a = {};
            (a.msg = t), (a.location = "");
          } else a.time = parseInt(a.time);
          (a.type = a.type || "wap"),
            (a.status = a.status || "success"),
            (a.animation = a.animation || "fade"),
            (a.location = a.location || "bottom"),
            i++;
          let s = o + i;
          var r = {
            class: `pxmu-toast pxmu-toast-${a.type} ${s}`,
            msg: a.msg || "操作成功",
            time: a.time || 2500,
            bg: a.bg || "rgba(0, 0, 0, 0.86)",
            color: a.color || "#fff",
          };
          if (!0 === e.toast) {
            var l = document.getElementsByClassName("pxmu-toast")[0];
            n.pxmulog(l), l && document.body.removeChild(l);
          }
          var m = document.createElement("div");
          m.setAttribute("class", r.class);
          let d = "background-color:" + r.bg + ";color:" + r.color + ";",
            c = `<div class="pxmu-${a.status} pxmu-${a.animation}-in pxmu-toast-${a.location}"><div style="${d}">${r.msg}</div></div>`;
          (m.innerHTML = c),
            document.body.appendChild(m),
            setTimeout(function () {
              m.setAttribute("class", r.class + " pxmu-" + a.animation + "-out"),
                setTimeout(function () {
                  (l = document.getElementsByClassName(s)[0]),
                    n.pxmulog(s),
                    l && document.body.removeChild(l);
                }, 1e3 * t);
            }, r.time);
        },
      };
      return n;
    });
