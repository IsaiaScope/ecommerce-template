import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'home',
  // },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./features/home').then((m) => m.LoginModule),
  // },
  // {
  //   path: 'parola-del-giorno',
  //   data: {
  //     title: 'Parola del giorno',
  //   },
  //   canActivate: [AuthGuard],
  //   loadChildren: () =>
  //     import('./pages/home/home.module').then((m) => m.HomeModule),
  // },
  // {
  //   path: 'cerca-per-categorie',
  //   data: {
  //     title: 'Ricerca per categorie',
  //   },
  //   canActivate: [AuthGuard],
  //   loadChildren: () =>
  //     import('./pages/search-category/search-category.module').then(
  //       (m) => m.SearchCategoryModule
  //     ),
  // },
  // {
  //   path: 'lemma/:slug/:id',
  //   data: {
  //     title: 'Lemma',
  //   },
  //   canActivate: [AuthGuard],
  //   loadChildren: () =>
  //     import('./pages/detail/detail.module').then((m) => m.DetailModule),
  // },
  // {
  //   path: 'preferiti',
  //   data: {
  //     title: 'Preferiti',
  //   },
  //   canActivate: [AuthGuard],
  //   loadChildren: () =>
  //     import('./pages/favourites/favourites.module').then(
  //       (m) => m.FavouritesModule
  //     ),
  // },
  // {
  //   path: 'cronologia',
  //   data: {
  //     title: 'Cronologia',
  //   },
  //   canActivate: [AuthGuard],
  //   loadChildren: () =>
  //     import('./pages/history/history.module').then((m) => m.HistoryModule),
  // },
  // {
  //   path: 'rubrica/:param',
  //   data: {
  //     title: 'Rubrica',
  //   },
  //   canActivate: [AuthGuard],
  //   loadChildren: () =>
  //     import('./pages/rubric/rubric.module').then((m) => m.RubricModule),
  // },
  // {
  //   path: 'impostazioni',
  //   data: {
  //     title: 'Impostazioni',
  //   },
  //   canActivate: [AuthGuard],
  //   loadChildren: () =>
  //     import('./pages/settings/settings.module').then((m) => m.SettingsModule),
  // },
  // {
  //   path: 'crediti',
  //   data: {
  //     title: 'Crediti',
  //   },
  //   canActivate: [AuthGuard],
  //   loadChildren: () =>
  //     import('./pages/credits/credits.module').then((m) => m.CreditsModule),
  // },
  // {
  //   path: 'ricerca-per-categorie',
  //   data: {
  //     title: 'ricerca per categorie',
  //   },
  //   canActivate: [AuthGuard],
  //   loadChildren: () =>
  //     import('./pages/entry-by-category/entry-by-category.module').then(
  //       (m) => m.EntryByCategoryModule
  //     ),
  // },
  // {
  //   path: 'error',
  //   data: {
  //     title: 'Errore',
  //   },
  //   loadChildren: () =>
  //     import('./pages/error/error.module').then((m) => m.ErrorModule),
  // },
  // {
  //   path: '**',
  //   data: {
  //     title: 'Errore',
  //   },
  //   loadChildren: () =>
  //     import('./pages/error/error.module').then((m) => m.ErrorModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
