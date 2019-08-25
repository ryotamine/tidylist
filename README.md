# Tidylist Project by Ryota Mine

Tidylist is a full-stack web application built with HTML, CSS, JavaScript, Node, Express, EJS, and PostgreSQL that allows users to create their to-do list. They can add, cross-off, and delete item(s). Also, users can update and delete their profiles. The application is responsive to handle various screen sizes. The northern lights in Canada were the inspiration for the background CSS animation.

## Final Product

!["Screenshot of home page"](https://github.com/ryotamine/tidylist/blob/master/docs/home.png)
!["Screenshot of register modal"](https://github.com/ryotamine/tidylist/blob/master/docs/register.png)
!["Screenshot of login modal"](https://github.com/ryotamine/tidylist/blob/master/docs/login.png)
!["Screenshot of tidylist"](https://github.com/ryotamine/tidylist/blob/master/docs/tidylist.png)
!["Screenshot of add list item"](https://github.com/ryotamine/tidylist/blob/master/docs/add-list-item.png)
!["Screenshot of cross-off list item"](https://github.com/ryotamine/tidylist/blob/master/docs/cross-off-list-item.png)
!["Screenshot of delete list item"](https://github.com/ryotamine/tidylist/blob/master/docs/delete-list-item.png)
!["Screenshot of update profile modal"](https://github.com/ryotamine/tidylist/blob/master/docs/update-profile.png)
!["Screenshot of delete profile modal"](https://github.com/ryotamine/tidylist/blob/master/docs/delete-profile.png)
!["Screenshot of logout modal"](https://github.com/ryotamine/tidylist/blob/master/docs/logout.png)

## Dependencies

- bcrypt
- body-parser
- cookie-session
- ejs
- express
- knex
- method-override
- pg
- serve-favicon

## Getting Started

1. Fork and clone.
2. Install dependencies using the `npm install` command.
3. Run migrations using the `npm run knex migrate:latest` command.
4. Start the web server using the `node express_server.js` command.
5. Go to <http://localhost:8080/> in your browser.
