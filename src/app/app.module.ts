import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoresComponent } from './stores/stores.component';
import { StoreComponent } from './stores/store/store.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { CardSearchComponent } from './components/card-search/card-search.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { RouterModule } from '@angular/router';
import { CardQueryComponent } from './components/card-query/card-query.component';
import { CardStoreComponent } from './components/card-store/card-store.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { ImgPathPipe } from './pipes/img-path.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StoresComponent,
    StoreComponent,
    HeaderComponent,
    CardComponent,
    CardSearchComponent,
    WishlistComponent,
    CardQueryComponent,
    CardStoreComponent,
    ProductComponent,
    ProfileComponent,
    ProfileInfoComponent,
    ImgPathPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
