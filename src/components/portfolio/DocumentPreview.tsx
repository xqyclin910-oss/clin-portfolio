'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface DocumentPreviewProps {
  file: string;
  title: string;
  type: 'pdf' | 'docx' | 'xlsx' | 'image';
  trigger: React.ReactNode;
}

export function DocumentPreview({ file, title, type, trigger }: DocumentPreviewProps) {
  const [open, setOpen] = useState(false);

  const getFileViewer = () => {
    if (type === 'pdf') {
      // PDF 使用 iframe 或 object 标签预览
      return (
        <div className="w-full h-full flex items-center justify-center bg-secondary">
          <iframe
            src={file}
            className="w-full h-[70vh] border-0"
            title={title}
          />
        </div>
      );
    }
    
    if (type === 'image') {
      return (
        <div className="w-full h-full flex items-center justify-center p-4">
          <img
            src={file}
            alt={title}
            className="max-w-full max-h-[70vh] object-contain"
          />
        </div>
      );
    }
    
    // docx 和 xlsx 使用 Office Online 预览或提示下载
    return (
      <div className="w-full h-[70vh] flex flex-col items-center justify-center bg-secondary">
        <div className="text-center mb-6">
          <p className="text-lg font-semibold text-foreground mb-2">{title}</p>
          <p className="text-sm text-muted-foreground">
            {type === 'docx' ? 'Word 文档' : 'Excel 表格'}
          </p>
        </div>
        <Button
          onClick={() => window.open(file, '_blank')}
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          下载查看文档
        </Button>
      </div>
    );
  };

  return (
    <>
      <div onClick={() => setOpen(true)} className="cursor-pointer">
        {trigger}
      </div>
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-card border-border">
          <DialogHeader className="p-4 border-b border-border">
            <DialogTitle className="text-lg font-semibold text-foreground">
              {title}
            </DialogTitle>
          </DialogHeader>
          <div className="p-4 overflow-auto">
            {getFileViewer()}
          </div>
          <div className="p-4 border-t border-border flex justify-end gap-2">
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              className="border-border text-muted-foreground hover:text-foreground"
            >
              关闭
            </Button>
            <Button
              onClick={() => window.open(file, '_blank')}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              打开原文件
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}