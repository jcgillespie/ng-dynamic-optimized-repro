import { Injectable, Component, NgModule, ViewRef, Injector, Compiler } from '@angular/core';
import { CommonModule } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DynamicContentService {
  constructor(private compiler: Compiler, private injector: Injector) { }

  public async compileContent(content: string): Promise<ViewRef> {
    // component object definition.
    const comp = {
      template: content,
      jit: true
    } as Component;
    // temporary component to add to module.
    const tmpCpm = Component(comp)(class { });

    // module object definition
    const ngMod = {
      declarations: [tmpCpm],
      imports: [CommonModule],
      jit: true
    } as NgModule;

    // temporary module containing temporary component
    const tmpModule = NgModule(ngMod)(class { });

    // compile all the things and get the factory
    const factories = await this.compiler.compileModuleAndAllComponentsAsync(tmpModule);

    const f = factories.componentFactories[0]; // as ComponentFactory<any>;
    const cmpRef = f.create(this.injector, [], null, null);
    return cmpRef.hostView;
  }
}
