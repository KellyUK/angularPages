import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";
import { renderFlagCheckIfStmt } from "@angular/compiler/src/render3/view/template";

@Directive({
  selector: "[appTimes]"
})
export class TimesDirective {
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}
  @Input("appTimes") set render(times: number) {
    this.viewContainer.clear();

    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        index: i
      });
    }
  }
}
