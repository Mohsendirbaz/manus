CREATE TABLE `slide_annotations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`slideId` varchar(32) NOT NULL,
	`userId` int NOT NULL,
	`note` text,
	`bookmarked` boolean NOT NULL DEFAULT false,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `slide_annotations_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `uploaded_files` (
	`id` int AUTO_INCREMENT NOT NULL,
	`fileKey` varchar(512) NOT NULL,
	`url` text NOT NULL,
	`originalName` varchar(512) NOT NULL,
	`mimeType` varchar(128) NOT NULL,
	`sizeBytes` bigint NOT NULL,
	`slideId` varchar(32),
	`description` text,
	`uploadedBy` int,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `uploaded_files_id` PRIMARY KEY(`id`),
	CONSTRAINT `uploaded_files_fileKey_unique` UNIQUE(`fileKey`)
);
