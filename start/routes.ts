/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
}).as('home')

Route.get('/ui', async ({ view }) => {
  return view.render('ui/ui')
})
Route.get('/ui/auth', async ({ view }) => {
  return view.render('ui/auth')
})

Route.get('/lui', async ({ view }) => {
  return view.render('lui/layout')
})
Route.get('/lui/books', async ({ view }) => {
  return view.render('lui/books')
})
Route.get('/lui/user', async ({ view }) => {
  return view.render('lui/user')
})

Route.group(() => {
  Route.get('/', 'BooksController.index').as('books/list')
  Route.get('/:book_id/notes', 'BooksController.notes')
  Route.post('/:book_id/notes', 'BooksController.createNote')
  Route.get('/:book_id/notes/:view_type', 'BooksController.notes')
}).prefix('/books');


Route.group(() => {
  Route.get('/', 'UsersController.index').as('users/list')
  Route.get('/:user_id', 'UsersController.show')
  Route.post('/:user_id', 'UsersController.create')
  Route.patch('/:user_id', 'UsersController.update')
  Route.delete('/:user_id', 'UsersController.delete')
}).prefix('/users').middleware('auth')

Route.group(() => {
  Route.get('/login', 'AuthController.loginForm').as('auth/login_form')
  Route.post('/login', 'AuthController.login').as('auth/login')
  Route.get('/register', 'AuthController.registerForm').as('auth/register_form')
  Route.post('/register', 'AuthController.register').as('auth/register')
  Route.get('/logout', 'AuthController.logout').as('auth/logout')
}).prefix('/auth')

Route.group(() => {
  Route.get('/', 'BacklogPoolsController.index').as('backlog_pools')
  Route.get('/get_list', 'BacklogPoolsController.getList').as('backlog_pools/get_list')
}).prefix('/backlog_pools')


Route.group(() => {
  Route.get('/poker', 'ScrumController.poker').as('scrum/poker')
}).prefix('/scrum').middleware('auth')


Route.get('posts', 'PostsController.index').as('posts/get')
