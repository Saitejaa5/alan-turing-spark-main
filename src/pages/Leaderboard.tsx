import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Leaderboard = () => {

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Club Leaderboard</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Coming Soon! Our leaderboard system will track member achievements, event participation, 
          and contributions to celebrate our most active community members.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Leaderboard Under Development</CardTitle>
          <CardDescription>
            We're building an exciting points and achievements system
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center py-12">
          <div className="space-y-4">
            <div className="text-6xl">🚧</div>
            <h3 className="text-xl font-semibold">System in Progress</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Our development team is working on creating a comprehensive leaderboard system 
              that will track member achievements, event participation, and community contributions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="p-4 rounded-lg bg-muted/20">
                <div className="text-2xl mb-2">🏆</div>
                <h4 className="font-semibold">Achievement System</h4>
                <p className="text-sm text-muted-foreground">
                  Unlock badges for various accomplishments
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted/20">
                <div className="text-2xl mb-2">📊</div>
                <h4 className="font-semibold">Points Tracking</h4>
                <p className="text-sm text-muted-foreground">
                  Earn points through participation and contributions
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted/20">
                <div className="text-2xl mb-2">🎯</div>
                <h4 className="font-semibold">Competition</h4>
                <p className="text-sm text-muted-foreground">
                  Friendly competition to encourage engagement
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Leaderboard;