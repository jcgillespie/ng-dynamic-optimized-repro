import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CompilerFactory, COMPILER_OPTIONS, Compiler } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicModule } from './dynamic/dynamic.module';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';

export function createCompiler(compilerFactory: CompilerFactory) {
  return compilerFactory.createCompiler();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DynamicModule
  ],
  providers: [
    /* JIT compiler setup for dynamic components */
    { provide: COMPILER_OPTIONS, useValue: {}, multi: true },
    { provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS] },
    { provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
