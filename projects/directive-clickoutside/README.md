# DirectiveClickoutside

Angular directive to capture when click outside of element

## Install

```
npm i directive-clickoutside
```

## Usage

### 1 Import module

```
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { DirectiveClickoutsideModule } from 'directive-clickoutside';

@NgModule({
    imports: [
        BrowserModule,
        DirectiveClickoutsideModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

### 2 Use in html element

```
<div (libOnClickOut)="test()"> testing div </div>
```
