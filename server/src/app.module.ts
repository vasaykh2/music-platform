import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.modulees';

@Module({
	imports: [
		TrackModule,
		MongooseModule.forRoot('mongodb://localhost:27017/music-platform'),
		FileModule,
	],
})
export class AppModule {}
