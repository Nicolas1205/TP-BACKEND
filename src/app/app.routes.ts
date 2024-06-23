import { Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { Page1Component } from './components/page1/page1.component';
import { PageaComponent } from './components/pagea/pagea.component';
import { PagebComponent } from './components/pageb/pageb.component';
import { Page1FormComponent } from './components/page1-form/page1-form.component';
import { PageaFormComponent } from './components/pagea-form/pagea-form.component';
import { PagebFormComponent } from './components/pageb-form/pageb-form.component';

export const routes: Routes = [
    {
        path: 'index',
        component: IndexComponent
    },
    {
        path: '',
        component: IndexComponent
    },
    {
        path: 'page1',
        component: Page1Component
    },
    {
        path: 'page1Form',
        component: Page1FormComponent
    },
    {
        path: 'pagea',
        component: PageaComponent
    },
    {
        path: 'pageaForm',
        component: PageaFormComponent
    },
    {
        path: 'pageb',
        component: PagebComponent
    },
    {
        path: 'pagebForm/:id',
        component: PagebFormComponent
    }
];
