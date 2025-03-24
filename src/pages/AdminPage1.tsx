import React, { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import MobileLayout from '@/components/layout/MobileLayout';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { 
  categories, 
  techniques, 
  katas, 
  historicalFigures, 
  articles, 
  principles 
} from '@/data/index';
import { toast } from '@/components/ui/use-toast';
import EditorToolbar from '@/components/admin/EditorToolbar';
import { Article } from '@/types';

const AdminPage = () => {
  const [selectedDataType, setSelectedDataType] = useState<string>('techniques');
  const [selectedItemId, setSelectedItemId] = useState<string>('');
  const [currentData, setCurrentData] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  
  // Simple editor setup
  const editor = useEditor({
    extensions: [StarterKit],
    content: '',
  });

  // Get data based on selected type
  const getDataItems = () => {
    switch(selectedDataType) {
      case 'categories': return categories;
      case 'techniques': return techniques;
      case 'katas': return katas;
      case 'historicalFigures': return historicalFigures;
      case 'articles': return articles;
      case 'principles': return principles;
      default: return [];
    }
  };

  // Select an item to edit
  const handleSelectItem = (id: string) => {
    const items = getDataItems();
    const item = items.find(item => item.id === id);
    setSelectedItemId(id);
    setCurrentData(item ? {...item} : null);
    setIsEditing(!!item);
    
    // Set editor content if applicable - check if item is an Article
    if (item && editor && selectedDataType === 'articles') {
      // Type guard to ensure item has content property
      const articleItem = item as Article;
      if ('content' in articleItem) {
        editor.commands.setContent(articleItem.content);
      }
    }
  };

  // Handle field change
  const handleFieldChange = (field: string, value: any) => {
    if (!currentData) return;
    
    setCurrentData({
      ...currentData,
      [field]: value
    });
  };

  // Handle array field changes
  const handleArrayChange = (field: string, index: number, value: string) => {
    if (!currentData || !currentData[field]) return;
    
    const newArray = [...currentData[field]];
    newArray[index] = value;
    
    setCurrentData({
      ...currentData,
      [field]: newArray
    });
  };

  // Add an item to an array field
  const handleAddArrayItem = (field: string) => {
    if (!currentData) return;
    
    setCurrentData({
      ...currentData,
      [field]: [...(currentData[field] || []), '']
    });
  };

  // Remove an item from an array field
  const handleRemoveArrayItem = (field: string, index: number) => {
    if (!currentData || !currentData[field]) return;
    
    const newArray = [...currentData[field]];
    newArray.splice(index, 1);
    
    setCurrentData({
      ...currentData,
      [field]: newArray
    });
  };

  // Export JSON data
  const exportData = () => {
    const dataMap = {
      categories,
      techniques,
      katas,
      historicalFigures,
      articles,
      principles
    };
    
    const dataStr = JSON.stringify(dataMap, null, 2);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
    
    const exportFileDefaultName = 'goju-ryu-data.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  // Save changes (in a real app, this would persist to storage)
  const saveChanges = () => {
    // In a real implementation, you would save this to a database or file
    // For now, we'll just show a toast notification
    toast({
      title: "Data saved",
      description: "In a production app, this would save to a database or file. For now, export your data manually.",
    });
  };

  // Render fields based on data type
  const renderFields = () => {
    if (!currentData) return null;

    switch(selectedDataType) {
      case 'techniques':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name" 
                value={currentData.name || ''} 
                onChange={(e) => handleFieldChange('name', e.target.value)} 
              />
            </div>
            
            <div>
              <Label htmlFor="japaneseName">Japanese Name</Label>
              <Input 
                id="japaneseName" 
                value={currentData.japaneseName || ''} 
                onChange={(e) => handleFieldChange('japaneseName', e.target.value)} 
              />
            </div>
            
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea 
                id="description" 
                value={currentData.description || ''} 
                onChange={(e) => handleFieldChange('description', e.target.value)} 
              />
            </div>
            
            <div>
              <Label>Steps</Label>
              <div className="space-y-2">
                {currentData.steps?.map((step: string, index: number) => (
                  <div key={index} className="flex gap-2">
                    <Input 
                      value={step} 
                      onChange={(e) => handleArrayChange('steps', index, e.target.value)} 
                    />
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleRemoveArrayItem('steps', index)}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
                <Button 
                  variant="outline" 
                  onClick={() => handleAddArrayItem('steps')}
                >
                  Add Step
                </Button>
              </div>
            </div>
            
            <div>
              <Label>Images</Label>
              <div className="space-y-2">
                {currentData.images?.map((image: string, index: number) => (
                  <div key={index} className="flex gap-2">
                    <Input 
                      value={image} 
                      onChange={(e) => handleArrayChange('images', index, e.target.value)} 
                    />
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleRemoveArrayItem('images', index)}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
                <Button 
                  variant="outline" 
                  onClick={() => handleAddArrayItem('images')}
                >
                  Add Image URL
                </Button>
              </div>
            </div>
            
            <div>
              <Label htmlFor="category">Category</Label>
              <Input 
                id="category" 
                value={currentData.category || ''} 
                onChange={(e) => handleFieldChange('category', e.target.value)} 
              />
            </div>
          </div>
        );
      
      case 'katas':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name" 
                value={currentData.name || ''} 
                onChange={(e) => handleFieldChange('name', e.target.value)} 
              />
            </div>
            
            <div>
              <Label htmlFor="japaneseName">Japanese Name</Label>
              <Input 
                id="japaneseName" 
                value={currentData.japaneseName || ''} 
                onChange={(e) => handleFieldChange('japaneseName', e.target.value)} 
              />
            </div>
            
            <div>
              <Label htmlFor="meaning">Meaning</Label>
              <Input 
                id="meaning" 
                value={currentData.meaning || ''} 
                onChange={(e) => handleFieldChange('meaning', e.target.value)} 
              />
            </div>
            
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea 
                id="description" 
                value={currentData.description || ''} 
                onChange={(e) => handleFieldChange('description', e.target.value)} 
              />
            </div>
            
            <div>
              <Label htmlFor="level">Level</Label>
              <Input 
                id="level" 
                value={currentData.level || ''} 
                onChange={(e) => handleFieldChange('level', e.target.value)} 
              />
            </div>
            
            <div>
              <Label>Steps</Label>
              <div className="space-y-2">
                {currentData.steps?.map((step: string, index: number) => (
                  <div key={index} className="flex gap-2">
                    <Input 
                      value={step} 
                      onChange={(e) => handleArrayChange('steps', index, e.target.value)} 
                    />
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleRemoveArrayItem('steps', index)}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
                <Button 
                  variant="outline" 
                  onClick={() => handleAddArrayItem('steps')}
                >
                  Add Step
                </Button>
              </div>
            </div>
          </div>
        );
      
      case 'articles':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input 
                id="title" 
                value={currentData.title || ''} 
                onChange={(e) => handleFieldChange('title', e.target.value)} 
              />
            </div>
            
            <div>
              <Label htmlFor="content">Content</Label>
              <div className="border rounded-md p-2">
                <EditorToolbar editor={editor} />
                <EditorContent editor={editor} />
              </div>
            </div>
            
            <div>
              <Label htmlFor="category">Category</Label>
              <Input 
                id="category" 
                value={currentData.category || ''} 
                onChange={(e) => handleFieldChange('category', e.target.value)} 
              />
            </div>
            
            <div>
              <Label htmlFor="image">Image URL</Label>
              <Input 
                id="image" 
                value={currentData.image || ''} 
                onChange={(e) => handleFieldChange('image', e.target.value)} 
              />
            </div>
            
            <div>
              <Label htmlFor="author">Author</Label>
              <Input 
                id="author" 
                value={currentData.author || ''} 
                onChange={(e) => handleFieldChange('author', e.target.value)} 
              />
            </div>
            
            <div>
              <Label htmlFor="date">Date</Label>
              <Input 
                id="date" 
                value={currentData.date || ''} 
                onChange={(e) => handleFieldChange('date', e.target.value)} 
              />
            </div>
          </div>
        );
      
      default:
        return (
          <div className="p-4 bg-stone-100 rounded">
            <p>Select a data type and item to edit.</p>
          </div>
        );
    }
  };

  return (
    <MobileLayout>
      <div className="p-4">
        <h1 className="text-2xl font-serif mb-4">Goju Ryu Data Admin</h1>
        
        <div className="space-y-6">
          <div className="flex justify-between">
            <Button onClick={exportData} variant="outline">Export All Data</Button>
            <Button onClick={saveChanges} disabled={!isEditing}>Save Changes</Button>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="dataType">Data Type</Label>
              <Select
                value={selectedDataType}
                onValueChange={(value) => {
                  setSelectedDataType(value);
                  setSelectedItemId('');
                  setCurrentData(null);
                  setIsEditing(false);
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select data type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="categories">Categories</SelectItem>
                  <SelectItem value="techniques">Techniques</SelectItem>
                  <SelectItem value="katas">Katas</SelectItem>
                  <SelectItem value="historicalFigures">Historical Figures</SelectItem>
                  <SelectItem value="articles">Articles</SelectItem>
                  <SelectItem value="principles">Principles</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="item">Select Item</Label>
              <Select
                value={selectedItemId}
                onValueChange={handleSelectItem}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select an item to edit" />
                </SelectTrigger>
                <SelectContent>
                  {getDataItems().map((item: any) => (
                    <SelectItem key={item.id} value={item.id}>
                      {item.name || item.title || item.id}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="border p-4 rounded-md">
            {isEditing ? (
              renderFields()
            ) : (
              <div className="text-center p-4">
                <p>Select an item to edit</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default AdminPage;
