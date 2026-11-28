import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'homepage',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.css', './common.css']
})
export class Homepage {
  protected readonly title = signal('dantsoumbou-github-io');
  private route = inject(ActivatedRoute);
  hasActiveChild = computed(() => this.route.children.length > 0);
}
