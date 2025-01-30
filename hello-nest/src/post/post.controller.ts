import { Controller, Get } from '@nestjs/common';

import { Post } from '../post.entity';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async getPosts(): Promise<Post[]> {
    return this.postService.getAllPost();
  }
}
