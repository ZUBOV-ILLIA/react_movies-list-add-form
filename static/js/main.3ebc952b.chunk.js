(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){"use strict";i.r(t);var a=i(7),s=i.n(a),n=(i(14),i(5)),c=i(2),l=i(1),o=(i(15),i(9)),r=(i(16),i(17),i(0)),m=function(e){var t=e.title,i=e.description,a=e.imgUrl,s=e.imdbUrl;return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{src:a,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8",children:t})})]}),Object(r.jsxs)("div",{className:"content",children:[i,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:s,children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(m,Object(o.a)({},e),e.imdbId)}))})},j=(i(19),function(e){var t=e.addMovie,i=e.movies,a=Object(l.useState)(""),s=Object(c.a)(a,2),o=s[0],m=s[1],d=Object(l.useState)(!1),j=Object(c.a)(d,2),h=j[0],b=j[1],p=Object(l.useState)(""),u=Object(c.a)(p,2),O=u[0],g=u[1],x=Object(l.useState)(""),f=Object(c.a)(x,2),v=f[0],w=f[1],M=Object(l.useState)(!1),N=Object(c.a)(M,2),y=N[0],k=N[1],T=Object(l.useState)(""),_=Object(c.a)(T,2),I=_[0],z=_[1],U=Object(l.useState)(!1),B=Object(c.a)(U,2),D=B[0],S=B[1],Y=Object(l.useState)(""),V=Object(c.a)(Y,2),A=V[0],X=V[1],Z=Object(l.useState)(!1),C=Object(c.a)(Z,2),E=C[0],F=C[1];function L(e){return new RegExp(/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/).test(e)}return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{className:"add-movie-form",onSubmit:function(e){if(e.preventDefault(),b(!o),k(!L(v)),S(!L(I)),A||F(!0),o&&O&&L(v)&&L(I)&&A){var a=[{title:o,description:O,imgUrl:v,imdbUrl:I,imdbId:A}].concat(Object(n.a)(i));t(a),m(""),g(""),w(""),k(!1),S(!1),z(""),X("")}},children:[Object(r.jsx)("input",{type:"text",name:"title",className:"\n          input\n          ".concat(h&&"is-danger is-outlined empty-field"),placeholder:"Enter the title here",value:o,onChange:function(e){m(e.target.value),b(!1)}}),Object(r.jsx)("textarea",{name:"description",className:"textarea",placeholder:"Enter description here",value:O,onChange:function(e){g(e.target.value)}}),Object(r.jsx)("input",{type:"text",name:"imgUrl",className:"\n          input\n          ".concat(y&&"is-danger is-outlined empty-field"),placeholder:"Please enter valid poster link here",value:v,onChange:function(e){w(e.target.value),k(!L(v))}}),Object(r.jsx)("input",{type:"text",name:"imdbUrl",className:"\n          input\n          ".concat(D&&"is-danger is-outlined empty-field"),placeholder:"Please enter valid url link to movie here",value:I,onChange:function(e){z(e.target.value),S(!L(I))}}),Object(r.jsx)("input",{type:"text",name:"imdbId",className:"\n          input\n          ".concat(E&&"is-danger is-outlined empty-field"),placeholder:"Enter imdb ID here",value:A,onChange:function(e){X(e.target.value),F(!1)}}),Object(r.jsx)("button",{type:"submit",className:" button is-primary is-outlined",children:"Add movie"})]}),Object(r.jsxs)("section",{className:"section",children:[Object(r.jsx)("p",{children:"Hello! Here you can simply find a link to try adding a new movie. Or you can go straight to the IMDB site and grab links from there. If you enter at least one invalid link, the movie card will not be added, but I am still thinking how to show you the link error."}),Object(r.jsxs)("p",{children:["Title:",Object(r.jsx)("span",{className:"has-text-info",children:" Notting Hill"})]}),Object(r.jsxs)("p",{children:["Description:",Object(r.jsx)("span",{className:"has-text-info",children:" The life of a simple bookshop owner changes when he meetsthe most famous film star in the world."})]}),Object(r.jsxs)("p",{children:["URL link to Poster:",Object(r.jsx)("span",{className:"has-text-info",children:" https://m.media-amazon.com/images/M/MV5BMTE5OTkwYzYtNDhlNC00MzljLTk1YTktY2IxZjliZmNjMjUzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"})]}),Object(r.jsxs)("p",{children:["URL link to movie:",Object(r.jsx)("span",{className:"has-text-info",children:" https://www.imdb.com/title/tt0125439/?ref_=tt_sims_tt_i_3"})]}),Object(r.jsxs)("p",{children:["ID:",Object(r.jsx)("span",{className:"has-text-info",children:" tt0125439"})]})]})]})}),h=i(8),b=function(){var e=Object(l.useState)(Object(n.a)(h)),t=Object(c.a)(e,2),i=t[0],a=t[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(d,{movies:i})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(j,{addMovie:function(e){a(e)},movies:i})})]})};s.a.render(Object(r.jsx)(b,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.3ebc952b.chunk.js.map