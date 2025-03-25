import React, { useState } from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { mediaData } from '@/data/media';
import { validateMediaUrl } from '@/utils/mediaUtils';

const MediaManagerPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<'vitalPoints' | 'terminology'>('vitalPoints');
  const [selectedItem, setSelectedItem] = useState<string>('');
  const [mediaType, setMediaType] = useState<'image' | 'video'>('image');
  const [mediaUrl, setMediaUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateMediaUrl(mediaUrl, mediaType)) {
      alert('Invalid media URL');
      return;
    }

    // Here you would typically make an API call to save the media
    console.log({
      category: selectedCategory,
      item: selectedItem,
      mediaType,
      mediaUrl,
      title,
      description
    });

    // Reset form
    setMediaUrl('');
    setTitle('');
    setDescription('');
  };

  const getItemsForCategory = () => {
    if (selectedCategory === 'vitalPoints') {
      return Object.keys(mediaData.vitalPoints);
    }
    return Object.keys(mediaData.terminology);
  };

  return (
    <AdminLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow p-6"
      >
        <h1 className="text-2xl font-bold mb-6">Media Manager</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label>Category</Label>
            <Select value={selectedCategory} onValueChange={(value: 'vitalPoints' | 'terminology') => setSelectedCategory(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="vitalPoints">Vital Points</SelectItem>
                <SelectItem value="terminology">Terminology</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Item</Label>
            <Select value={selectedItem} onValueChange={setSelectedItem}>
              <SelectTrigger>
                <SelectValue placeholder="Select item" />
              </SelectTrigger>
              <SelectContent>
                {getItemsForCategory().map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Media Type</Label>
            <Select value={mediaType} onValueChange={(value: 'image' | 'video') => setMediaType(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select media type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="image">Image</SelectItem>
                <SelectItem value="video">Video</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Media URL</Label>
            <Input
              type="text"
              value={mediaUrl}
              onChange={(e) => setMediaUrl(e.target.value)}
              placeholder={mediaType === 'video' ? 'YouTube URL' : 'Image URL'}
            />
          </div>

          <div className="space-y-2">
            <Label>Title</Label>
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Media title"
            />
          </div>

          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Media description"
            />
          </div>

          <Button type="submit" className="w-full">
            Add Media
          </Button>
        </form>
      </motion.div>
    </AdminLayout>
  );
};

export default MediaManagerPage; 