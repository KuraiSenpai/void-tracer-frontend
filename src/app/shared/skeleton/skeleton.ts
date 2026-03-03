import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: 'app-skeleton',
  imports: [MatIconModule, MatCardModule],
  templateUrl: './skeleton.html',
  styleUrl: './skeleton.scss',
})
export class Skeleton implements OnInit {
  @Input({ required: true }) headerClass!: string;
  @Input({ required: true }) usesFontSet!: boolean;
  @Input({ required: true }) iconName!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) hasCount: boolean = true;

  ngOnInit(): void {}
}
