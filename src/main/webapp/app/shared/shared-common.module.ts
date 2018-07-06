import { NgModule } from '@angular/core';

import { JBlogSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JBlogSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JBlogSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JBlogSharedCommonModule {}
