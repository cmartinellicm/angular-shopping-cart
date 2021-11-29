import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  productList: IProduct[] = [
    {
      productId: 1,
      productTitle: 'Produto 1',
      shortDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper purus ac mauris accumsan molestie. Cras tempus nunc sit amet rutrum feugiat.',
      fullDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius dui elit, id tristique eros tempor sed. Duis congue nisi vel nunc volutpat, a laoreet ex pretium. Quisque molestie neque ut varius faucibus. Maecenas et justo ac enim eleifend facilisis ut sed arcu. Mauris quis gravida nunc. Ut at laoreet tellus. Quisque viverra tempor neque, in gravida nunc dictum eget. Integer pulvinar suscipit pellentesque. Ut placerat nulla vel accumsan tincidunt.',
      price: 34.9,
      imgUrl: 'https://picsum.photos/id/201/300/200',
    },
    {
      productId: 2,
      productTitle: 'Produto 2',
      shortDescription:
        'Quisque quis nisi vitae erat egestas ullamcorper. Nullam sit amet augue eget nisi semper malesuada. Morbi eu rhoncus risus. Etiam ut ultricies lorem.',
      fullDescription:
        'Etiam et magna pulvinar, pretium justo eu, pretium enim. Aenean molestie nisi ipsum, sit amet congue libero dapibus a. Vivamus porta cursus nisi, nec aliquam justo condimentum vel. Integer eget ligula nec ex ultricies dignissim vitae eget nisl. Praesent interdum euismod quam bibendum mattis. Vivamus in rhoncus magna. In efficitur augue lacus, id molestie dolor tincidunt consectetur. Donec luctus ex leo, ut aliquet urna commodo sit amet.',
      price: 50.5,
      imgUrl: 'https://picsum.photos/id/202/300/200',
    },
    {
      productId: 3,
      productTitle: 'Produto 3',
      shortDescription:
        'Praesent ex neque, pulvinar in sapien vel, tincidunt commodo lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id porta felis.',
      fullDescription:
        'Cras fermentum a ligula eget sodales. Vestibulum dictum ipsum id sagittis efficitur. Mauris rutrum quis urna et sollicitudin. Integer commodo neque enim, molestie imperdiet sem tristique eget. Donec sed rutrum est. Praesent efficitur sollicitudin nibh, sed condimentum ipsum interdum maximus.',
      price: 100,
      imgUrl: 'https://picsum.photos/id/203/300/200',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
